module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    client.user.setStatus("idle");
    client.user.setActivity("/setup pour commancer", { type: "WATCHING" });
    console.log(`connceter sur ${client.user.tag}`);
  },
};