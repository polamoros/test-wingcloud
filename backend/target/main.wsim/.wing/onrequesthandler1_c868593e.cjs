"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? ((await (async () => {
  const $func = async (ctx, event) => {
            if (!event) {
                throw new Error("invalid API request event");
            }
            let req = JSON.parse(event);
            const response = await ctx.handler(req);
            if (!response) {
                return undefined;
            }
            else {
                return JSON.stringify(response);
            }
        }
  const $ctx = {
  handler: 
          (await (async () => {
            const $Closure2Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.$Closure2-9.cjs")({
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_660dbe08;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_660dbe08");
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
            $myBroadcaster: 
      (await (async () => {
        const BroadcasterClient = 
      require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.Broadcaster-8.cjs")({
      })
    ;
        const client = new BroadcasterClient({
          $this_clients: (function() {
  let handle = process.env.BUCKET_HANDLE_1b6cd9c9;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_1b6cd9c9");
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
          $this_server: 
      (await (async () => {
        const WebSocketClient = 
      require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.WebSocket-7.cjs")({
      })
    ;
        const client = new WebSocketClient({
          $this_inner: 
      (await (async () => {
        const WebSocket_simClient = 
      require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.WebSocket_sim-6.cjs")({
        $http_Util: require("/Users/polamoros/.nvm/versions/node/v20.11.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
        $std_Json: require("/Users/polamoros/.nvm/versions/node/v20.11.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ;
        const client = new WebSocket_simClient({
          $this_localStateKey: "local",
          $this_state: (function() {
  let handle = process.env.STATE_HANDLE_63ce87a2;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_63ce87a2");
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
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        
  };
  let newFunction = async (...args) => {
    return $func($ctx, ...args);
  };
  newFunction.handle = newFunction;
  return newFunction;
}
)()));
  return await $handler.handle(event);
};