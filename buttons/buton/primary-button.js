const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'primary-button', 
    async runInteraction( client, interaction)  {
        await interaction.reply({content: 'c moi le plus bô'})
     }
 };