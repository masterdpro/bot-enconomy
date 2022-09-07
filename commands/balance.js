const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberMoney } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("renvoie la somme de coins que tu possede"),
  async execute(interaction) {
    const memberMoney = await getMemberMoney(interaction.member);
    return interaction.reply(`voici ton nombre de coins \n \`${memberMoney}\` coins`);
  },
};

