bring cloud;

let q = new cloud.Queue();

test "my successfull test" {
  log("this is a successfull test");
  assert(true);
}

test "my failed test" {
  log("this is a failure");
  assert(false);
}

error!!!
