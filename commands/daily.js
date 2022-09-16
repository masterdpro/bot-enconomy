const { SlashCommandBuilder } = require("@discordjs/builders");
const { daily, addItem} = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("gagne ta vie une fois tout les 24H !"),
  async execute(interaction) {

    const random = Math.floor(Math.random() * 101);
    if (random == 100) {
      await interaction.reply({ content: "BRAVO, tu as avais 2% de chance de tombé sur se message, tu gagne 5000 coins et tu remporte un nouveau Badge!", ephemeral: true });
      await daily(interaction.member, 5000);
      await addItem(interaction.member, Quotidian_badge);
    }

    interaction.reply(await daily(interaction.member, 500));
  },
};
