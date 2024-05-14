"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.$Closure1-3.cjs")({
            $__parent_this_1_url: process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_VITE_WEBSITE_VITE_SIM_STATE_ATTRS_URL"],
          })
        ;
            const client = new $Closure1Client({
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
