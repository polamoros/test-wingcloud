bring cloud;

let secret = new cloud.Secret(
  name: "MY_SECRET",
);

new cloud.OnDeploy(inflight () => {
  log("MY_SECRET: secret.value()");
});

