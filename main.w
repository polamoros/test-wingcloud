bring cloud;

let bucket = new cloud.Bucket() as "Pol's Bucket";
let queue = new cloud.Queue() as "Pol's Queue";
let topic = new cloud.Topic() as "Pol's Topic";
let counter = new cloud.Counter() as "Pol's Counter";
let api = new cloud.Api() as "Pol's API";
let api2 = new cloud.Api() as "Another Pol's API";
let api3 = new cloud.Api() as "Yet Another Pol's API 3";
let api4 = new cloud.Api() as "Yet Another Pol's API 4";
let api5 = new cloud.Api() as "Yet Another Pol's API 5";
let website = new cloud.Website(path: "") as "Pol's Website";
let website2 = new cloud.Website(path: "") as "Another Pol's Website";
let website3 = new cloud.Website(path: "") as "Yet Another Pol's Website";

api.get("/hello", inflight (request) => {
  return {
    status: 200,
    body: "Hello World"
  };
});

test "Assert true" {
  log("Assertion should pass");
  assert(true);
} 

test "Assert true 2" {
  log("Assertion should pass");
  assert(true);
} 

test "Assert false" {
  log("Assertion should fail");
  assert(false);
}

test "Another Assert false" {
  log("Assertion should fail");
  assert(false);
}
