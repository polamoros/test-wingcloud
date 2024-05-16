bring cloud;
bring util;
bring http;
bring expect;

let website = new cloud.Website(
  path: "./website",
);

test "renders the index page" {
  log("website.url: {website.url}");
  
  let response = http.get(website.url);
  log("response: {Json.stringify(response)} ");
  
  expect.equal(response.status, 200);
  assert(response.body?.contains("Hello, Wing") == true);
  
}
