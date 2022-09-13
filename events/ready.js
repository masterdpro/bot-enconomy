module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    client.user.setStatus("idle");
    client.user.setActivity("/setup pour commencer", { type: "WATCHING" });
    console.log(`connceter sur: ${client.user.tag}`);
  },
};