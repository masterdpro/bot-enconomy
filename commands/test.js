const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const butttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
           .setCustomId('primary-button')
           .setLabel('primary')
           .setStyle('PRIMARY')
    )

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("affiche le classement des joeures les plus riche"),
  async execute(interaction) {
    await interaction.reply({content: `${interaction.author.email}`, components: [butttons]})
  },
}
