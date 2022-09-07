const { SlashCommandBuilder } = require("@discordjs/builders");
const { addMoney } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("donné de l'Argent")
    .addNumberOption(option =>
      option.setName("num").setDescription("entré le montant désiré").setRequired(true).setMinValue(1),
    )
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez donner").setRequired(true)),
  async execute(interaction) {
    const number = interaction.options.getNumber("num");
    const member = interaction.options.getMember("user", true);
    addMoney(member, number);
    return interaction.reply(`vous avez donner ${number} coins a ${member}`);
  },
};

