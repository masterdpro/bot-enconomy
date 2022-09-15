const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
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
      const omemberInventory = await getMemberInventory(omember);
      if (memberInventory == "") await interaction.reply("ton invetaire est vide :/");
      const oembed = new MessageEmbed()
      .setAuthor({ name: `L'inventaire de ${omember}`, iconURL: interaction.guild.iconURL() })
      .setColor("RANDOM")
      .addFIeld(`l'inventaire de ${omember} \n \`${omemberInventory.join("\n")}\``)
      interaction.reply({ embeds: [oembed] });
    }
    if (omember == "") return
    else if (memberInventory == "") await interaction.reply("ton invetaire est vide :/");
    const embed = new MessageEmbed()
      .setAuthor({ name: `L'inventaire de ${interaction.member}`, iconURL: interaction.guild.iconURL() })
      .setColor("RANDOM")
      .addFIeld(`l'inventaire de ${interaction.member} \n \`${memberInventory.join("\n")}\``)
    return interaction.reply({ embeds: [embed] });
  },
};

