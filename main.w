bring cloud;
bring http;
bring expect;

let website = new cloud.Website(
  path: "./website",
);

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
