const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberhp } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hp")
    .setDescription("renvoie ton nombre d'HP"),
  async execute(interaction) {
    const memberMoney = await getMemberhp(interaction.member);
    return interaction.reply(`voici ton nombre de coins \n \`${memberMoney}\` coins`);
  },
};

