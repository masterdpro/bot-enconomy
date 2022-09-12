const { SlashCommandBuilder } = require("@discordjs/builders");
const { work } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("gagne ta vie une fois tout les 24H !"),
  async execute(interaction) {
    interaction.reply(await work(interaction.member));
  },
};