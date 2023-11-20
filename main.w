bring cloud;

let bucket = new cloud.Bucket() as "Pol's Bucket";
let queue = new cloud.Queue() as "Pol's Queue";
let topic = new cloud.Topic() as "Pol's Topic";
let counter = new cloud.Counter() as "Pol's Counter";

let secret = new cloud.Secret(name: "TEST_SECRET");

let deploy = new cloud.OnDeploy(inflight () => {
  log("SECRET ${secret.value()}");
});

test "first test" {
  assert(true);
} 

test "another test" {
  assert(true);
} 
