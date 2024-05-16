bring cloud;
bring util;
bring http;
bring expect;

let website = new cloud.Website(
  path: "./website",
);

let api = new cloud.Api({
  cors: true,
  corsOptions: {
    allowHeaders: ["*"],
    allowMethods: [http.HttpMethod.POST],
  },
});
website.addJson("config.json", { api: api.url });

let counter = new cloud.Counter(initial: 0) as "website-counter-2";

api.post("/hello-static", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello {counter.inc()}</div>",
  };
});

let invokeAndAssert = inflight(response: http.Response, expected: str) => {
  log("api.url: {api.url}");
  log("response: {response.status} ");
  expect.equal(response.status, 200);
  assert(response.body?.contains(expected) == true);
};

test "renders the index page" {
  log("api.url: {website.url}");
  try {
    let response = http.get(website.url);
    expect.equal(response.status, 200);
    assert(response.body?.contains("Hello, Wing") == true);
  } catch e {
    log("error: {e}");
  }
}

test "api returns the correct response" {
  invokeAndAssert(http.post("{api.url}/hello-static"), "Hello 0");
}

test "api handles cors" {
  log("api.url: {api.url}");
  let response = http.fetch("{api.url}/hello-static", {
    method: http.HttpMethod.OPTIONS,
    headers: {
      "Origin" => "https://example.com",
      "hx-target" => "hello",
    },
  });
  expect.equal(response.status, 204);
  log("headers: {Json.stringify(response.headers)}");
  expect.equal(response.headers.get("access-control-allow-headers"), "*");
  expect.equal(response.headers.get("access-control-allow-origin"), "*");
  expect.equal(response.headers.get("access-control-allow-methods"), "POST");
}
