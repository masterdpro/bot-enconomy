const { SlashCommandBuilder } = require("@discordjs/builders");
const shop = require("../utils/shop");
const { capitalizeFirstLetter } = require("../utils/utilities");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("item")
    .setDescription("donné de l'Argent")
    .addStringOption(option =>
      option.setName("item").setDescription("entré le nom de l'item").setRequired(true),
    ),

  async execute(interaction) {
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const item = shop[itemName];
    if (!item) return interaction.reply("assure toi que tu a bien orthographier l'item");

    const embed = new MessageEmbed()
      .setAuthor({ name: `voici l'item: ${item.name}`, iconURL: interaction.guild.iconURL() })
      .setColor("#2F3136")
      .setDescription(item.description)
      .setFooter({ text: `${item.price} pour acheter ${item.name} `, iconURL: `${interaction.user.displayAvatarURL()}` });

    interaction.reply({ embeds:  [embed] });

  },
};