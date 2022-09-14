const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("voire ton inventaire")
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(false)),
  async execute(interaction) {
    const memberInventory = await getMemberInventory(interaction.member);
    const omember = interaction.options.getMember("user");
    if (omember) {
      const memberInventory = await getMemberInventory(omember);
      interaction.reply(`l'inventaire de ${omember} \n \`${memberInventory.join("\n")}\``);
    }
    if (omember == "") return
    else if (memberInventory == "") await interaction.reply("ton invetaire est vide :/");
    return interaction.reply(`voici ton inventaire \n \`${memberInventory.join("\n")}\``);
  },
};

