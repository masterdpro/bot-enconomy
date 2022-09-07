const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("voire ton inventaire"),
  async execute(interaction) {
    const memberInventory = await getMemberInventory(interaction.member);
    if (memberInventory == "") await interaction.reply("ton invetaire est vide :/");
    return interaction.reply(`voivi ton inventaire \`${memberInventory.join("\n")}\``);
  },
};

