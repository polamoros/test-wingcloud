      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure1Client = 
          require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.$Closure1-1.cjs")({
            $Vite_sim: 
      require("/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/target/main.wsim/.wing/inflight.Vite_sim-1.cjs")({
      })
    ,
            $cliFilename: "/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/node_modules/@winglibs/vite/vite-cli.mjs",
            $homeEnv: "/Users/polamoros",
            $openBrowser: true,
            $pathEnv: "/Users/polamoros/Library/pnpm:/Users/polamoros/.nvm/versions/node/v20.11.1/bin:/usr/local/php5/bin:/usr/local/git/bin:/sw/bin/:/usr/local/bin:/usr/local/:/usr/local/sbin:/usr/local/mysql/bin:/Users/polamoros/.cargo/bin:/Users/polamoros/.volta/bin:/Users/polamoros/.nvm/versions/node/v20.11.1/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/polamoros/bin:/Users/polamoros/dotfiles/bin:/usr/local/:/usr/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/lib/node_modules/node/bin:/Users/polamoros/.spawnctl/bin:/usr/local/bin/",
            $props_generateTypeDefinitions: undefined,
            $props_publicEnv: {"TITLE": "Wing + Vite + React","API_URL": process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_API_ATTRS_URL"],"WS_URL": process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_BROADCASTER_COUNTER_UPDATES_COUNTER_UPDATES_STATE_ATTRS_URL"],},
            $props_publicEnvName: undefined,
            $props_root: "/Users/polamoros/Projects/WingCloud/test-wingcloud/backend/../frontend",
            $props_typeDefinitionsFilename: undefined,
            $state: (function() {
  let handle = process.env.STATE_HANDLE_21d81e77;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_21d81e77");
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
