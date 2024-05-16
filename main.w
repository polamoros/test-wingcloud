bring cloud;
bring util;
bring http;
bring expect;

let website = new cloud.Website(
  path: "./static",
);

let api = new cloud.Api({
  cors: true,
  corsOptions: {
    allowHeaders: ["*"],
    allowMethods: [http.HttpMethod.POST],
  },
});
website.addJson("config.json", { api: api.url });


api.post("/hello-static", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello from the server</div>",
  };
});

let invokeAndAssert = inflight(response: http.Response, expected: str) => {
  log("response: {response.status} ");
  expect.equal(response.status, 200);
  assert(response.body?.contains(expected) == true);
};

test "renders the index page" {
  log("website.url: {website.url}");
  invokeAndAssert(http.get(website.url), "Hello, Wing");
}

test "api returns the correct response" {
  log("api.url: {api.url}");
  try {
    invokeAndAssert(http.post("{api.url}/hello-static"), "Hello from the server");
 } catch error {
    log("error: {error}");
    assert(false);
 }
}
