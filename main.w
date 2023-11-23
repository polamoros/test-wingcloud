bring cloud;

let bucket = new cloud.Bucket() as "Pol's Bucket";
let queue = new cloud.Queue() as "Pol's Queue";
let topic = new cloud.Topic() as "Pol's Topic";
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

test "Assert false" {
  log("Assertion should fail");
  assert(false);
} 

test "Assert false 2" {
  log("Assertion should fail");
  assert(false);
} 

test "Assert false 3" {
  log("Assertion should fail");
  assert(false);
} 

test "Assert false 4" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 5" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 6" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 7" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 8" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 9" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 10" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 11" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 12" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 13" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 14" {
  log("Assertion should fail");
  assert(false);
}

test "Assert false 15" {
  log("Assertion should fail");
  assert(false);
}
