const { SlashCommandBuilder } = require("@discordjs/builders");
const { removeMoney } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove")
    .setDescription("retiré de l'Argent")
    .addNumberOption(option =>
      option.setName("num").setDescription("entré le montant désiré").setRequired(true).setMinValue(1),
    )
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez retiré").setRequired(true)),
  async execute(interaction) {
    const number = interaction.options.getNumber("num");
    const member = interaction.options.getMember("user", true);
    removeMoney(member, number);
    return interaction.reply(`vous avez retiré ${number} coins a ${member}`);
  },
};
