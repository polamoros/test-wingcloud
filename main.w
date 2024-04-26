bring cloud;

let bucket = new cloud.Bucket() as "Pol's Bucket";
let queue = new cloud.Queue() as "Pol's Queue";
let topic = new cloud.Topic() as "Pol's Topic";
let counter = new cloud.Counter() as "Pol's Counter";
let api = new cloud.Api() as "Pol's API";
let website = new cloud.Website(path: "") as "Pol's Website";

api.get("/hello", inflight (request) => {
  return {
    status: 200,
    body: "Hello World"
  };
});


let secret = new cloud.Secret(
  name: "MY_SECRET", // optional, defaults to a generated name
);

api.get("/secret", inflight (request) => {
  return {
    status: 200,
    body: secret.value();
  }
});

test "Assert true" {
  log("Assertion should pass");
  assert(true);
} 
