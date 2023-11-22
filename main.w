bring cloud;

let bucket = new cloud.Bucket() as "Pol's Bucket";
let queue = new cloud.Queue() as "Pol's Queue";
let topic = new cloud.Topic() as "Pol's Topic";
let counter = new cloud.Counter() as "Pol's Counter";
let counter = new cloud.Counter() as "Pol's Counter";

test "Increment counter" {
  let previous = counter.inc();
  log("Assertion should fail: ${previous} === ${counter.peek()}");
  assert(previous == 1);
} 

test "Assert true" {
  log("Assertion should pass");
  assert(true);
} 
