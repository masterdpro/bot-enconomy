const { SlashCommandBuilder } = require("@discordjs/builders");
const { work, addItem} = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("travaille une fois tout les heur"),
  async execute(interaction) {
    //generate a random number between 0 ans 100
    const random = Math.floor(Math.random() * 101);
    const randomc = Math.random() * (100 - 200) + 100;
    if (random == 100) {
      await interaction.reply({ content: "BRAVO, tu as une 1% de chance de tombé sur se message, tu gagne 1000 coins et tu remporte une **Lucky_sword**!", ephemeral: true });
      await work(interaction.member, 1000);
      await addItem(interaction.member, Lucky_sword);
    }
    interaction.reply(await work(interaction.member, randomc));
  },
};