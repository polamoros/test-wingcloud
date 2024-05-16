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

api.get("/", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello from the API!</div>",
  };
});

api.post("/hello-static", inflight (request) => {
  return {
    status: 200,
    headers: {
      "Content-Type" => "text/html",
      "Access-Control-Allow-Origin" => "*",
    },
    body: "<div id=\"hello\" class=\"mt-4\">Hello from the API!</div>",
  };
});

test "renders the index page" {
  log("website.url: {website.url}");
  try {
    let response = http.get(website.url);
    expect.equal(response.status, 200);
    assert(response.body?.contains("Hello, Wing") == true);
  } catch e {
    log("error: {e}");
    assert(false);
  }
}
