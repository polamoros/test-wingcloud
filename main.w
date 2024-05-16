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
    allowOrigin: "*"
  },
});
website.addJson("config.json", { api: api.url });

let counter = new cloud.Counter() as "website-counter";

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
  log("api.url: {api.url}");
  invokeAndAssert(http.get(website.url), "Hello, Wing");
}

test "api returns the correct response" {
  log("api.url: {api.url}");
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
