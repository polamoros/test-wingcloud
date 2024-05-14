      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure4Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.$Closure4-6.cjs")({
            $WebSocket_sim: 
      require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.WebSocket_sim-6.cjs")({
        $http_Util: require("/Users/polamoros/.nvm/versions/node/v20.11.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
        $std_Json: require("/Users/polamoros/.nvm/versions/node/v20.11.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
            $__parent_this_4_connectFn: 
          (await (async () => {
            const $Closure1Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.$Closure1-8.cjs")({
            $__parent_this_1_clients: (function() {
  let handle = process.env.BUCKET_HANDLE_523a1d04;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_523a1d04");
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
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
            $__parent_this_4_disconnectFn: 
          (await (async () => {
            const $Closure2Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.$Closure2-8.cjs")({
            $__parent_this_2_clients: (function() {
  let handle = process.env.BUCKET_HANDLE_523a1d04;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_523a1d04");
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
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
            $__parent_this_4_localStateKey: "local",
            $__parent_this_4_messageFn: 
          (await (async () => {
            const $Closure3Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/test/main.wsim/.wing/inflight.$Closure3-6.cjs")({
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
            $__parent_this_4_state: (function() {
  let handle = process.env.STATE_HANDLE_b63ab41d;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_b63ab41d");
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
            $__parent_this_4_urlStateKey: "url",
          })
        ;
            const client = new $Closure4Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ;
        const noop = () => {};
        $stop = (await client.handle()) ?? noop;
      };

      exports.stop = async function() {
        if (!$stop) {
          throw Error('service not started');
        }
        await $stop();
        $stop = undefined;
      };
      
process.on("uncaughtException", (reason) => {
  process.send({ type: "reject", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "resolve", value });
});
