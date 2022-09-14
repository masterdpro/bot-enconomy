const { SlashCommandBuilder } = require("@discordjs/builders");
const { give } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fight")
    .setDescription("Affronté un membre")
    .addNumberOption(option =>
      option.setName("num").setDescription("entré le montant donné").setRequired(true).setMinValue(1),
    )
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez donner").setRequired(true)),
  async execute(interaction) {
    const number = interaction.options.getNumber("num");
    const member = interaction.options.getMember("user", true);
    return interaction.reply(await give(interaction.member, member, number));
  },
};
