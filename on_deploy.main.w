bring cloud;

let secret = new cloud.Secret(
  name: "MY_SECRET",
);

new cloud.OnDeploy(inflight () => {
  throw "SECRET VALUE: '{secret.value()}'";
});
