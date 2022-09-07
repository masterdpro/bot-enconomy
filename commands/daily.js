const { SlashCommandBuilder } = require("@discordjs/builders");
const { daily } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("gagne ta vie une fois tout les 24H !"),
  async execute(interaction) {
    interaction.reply(await daily(interaction.member));
  },
};
