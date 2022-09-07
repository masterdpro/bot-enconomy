const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { leaderboard } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("affiche le classement des joeures les plus riche"),
  async execute(interaction) {
    const guildLeaderboard = await leaderboard(interaction.guild.id);

    if (!guildLeaderboard || guildLeaderboard.length < 1) return interaction.reply(" ce serveur na pas de leaderboard");

    const embed = new MessageEmbed()
      .setAuthor({ name: `leaderboard de ${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
      .setColor("RANDOM");

    for (let i = 0; i < guildLeaderboard.length; i++) {
      const member = await interaction.guild.members.fetch(guildLeaderboard[i].id);
      embed.addField(`${i + 1}. ${member.displayName}`, `Coins: ${guildLeaderboard[i].coins}`);
    }

    return interaction.reply({ embeds: [embed] });
  },
};
