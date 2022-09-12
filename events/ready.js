module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    const now = new Date();
    client.user.setStatus("idle");
    client.user.setActivity("/setup pour commancer", { type: "WATCHING" });
    console.log(`connceter sur: ${client.user.tag}`);
    console.log(now)
  },
};