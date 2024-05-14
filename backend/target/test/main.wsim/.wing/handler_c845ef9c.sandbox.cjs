"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure3Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.$Closure3-9.cjs")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_ENV0_API_ATTRS_URL"],
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_591cd131;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_591cd131");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $http_Util: require("/Users/polamoros/.nvm/versions/node/v20.11.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.on("uncaughtException", (reason) => {
  process.send({ type: "reject", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "resolve", value });
});
