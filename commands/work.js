const { SlashCommandBuilder } = require("@discordjs/builders");
const { work } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("travaille une fois tout les heur"),
  async execute(interaction) {
    interaction.reply(await work(interaction.member));
  },
};