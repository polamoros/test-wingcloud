bring cloud;

let secret = new cloud.Secret(
  name: "MY_SECRET",
);

new cloud.Function(inflight () => {
  return secret.value();
});

