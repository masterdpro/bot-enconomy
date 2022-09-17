const { SlashCommandBuilder } = require("@discordjs/builders");
const { mine } = require("../utils/utilities");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


module.exports = {
  data: new SlashCommandBuilder()
    .setName("mine")
    .setDescription("travaille une fois tout les heur"),
  async execute(interaction) {
    const random = Math.floor(Math.random() * 101);
    if (random < 50 || random == 50) {
        interaction.reply(await mine(interaction.member, "Rock"));
    }
    if (random < 75 && random > 50 || random == 75) {
        interaction.reply(await mine(interaction.member, "Wooden_sword"));
    }
    if (random < 90 && random > 75 || random == 90) {
        interaction.reply(await mine(interaction.member, "Judge_hammer"));
    }
    if (random < 99 && random > 90 || random == 99) {
        interaction.reply(await mine(interaction.member, "Lucky_sword"));
    }
    if (random == 100) {
        interaction.reply("WOW evenement rare, tu as litteralement 1% chance de tomber sur se nombre bravo, en l'honneur tu remporte Mjöllnir, un des item les plus rare du serveur bravo")
        await mine(interaction.member,"Mjöllnir")
    }
    
  },
};