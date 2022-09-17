const { SlashCommandBuilder } = require("@discordjs/builders");
const { work, addItem, getMemberInventory} = require("../utils/utilities");
const exlusive = require("../utils/Hitem");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("travaille une fois tout les heur"),
  async execute(interaction) {
    const random = Math.floor(Math.random() * 101);
    const memberInventory = await getMemberInventory(interaction.member);
    const itemName = ("Lucky_sword" || "Tester_badge");
    const item = exlusive[itemName];
    const randomc = getRandomIntInclusive(100, 200)
    if (random == 100) {
      await interaction.reply({ content: "BRAVO, tu as une 1% de chance de tombé sur se message, tu gagne 1000 coins et tu remporte une **Lucky_sword**!", ephemeral: true });
      await work(interaction.member, 1000);
      await addItem(interaction.member, Lucky_sword);
    }
    if (memberInventory.includes(exlusive[itemName])) {
      interaction.reply(await work(interaction.member, randomc + 100));
    }
    interaction.reply(await work(interaction.member, randomc));
  },
};