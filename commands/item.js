const { SlashCommandBuilder } = require("@discordjs/builders");
const shop = require("../utils/shop");
const exlusive = require("../utils/Hitem");
const { capitalizeFirstLetter, getMemberInventory } = require("../utils/utilities");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("item")
    .setDescription("renvboir la description d'un item")
    .addStringOption(option =>
      option.setName("item").setDescription("entré le nom de l'item").setRequired(true),
    ),

  async execute(interaction) {
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const memberInventory = await getMemberInventory(interaction.member);
    const item = shop[itemName] || exlusive[itemName];
    if (!item) return interaction.reply("assure toi que tu a bien orthographier l'item");
    if ( itemName == "Lucky_sword" ) {
       if (!memberInventory.includes("Lucky_sword")) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
    }
   

    const embed = new MessageEmbed()
      .setAuthor({ name: `voici l'item: ${item.name}`, iconURL: interaction.guild.iconURL() })
      .setColor("#2F3136")
      .setDescription(item.description)
      .setFooter({ text: `${item.price} pour acheter ${item.name} `, iconURL: `${interaction.user.displayAvatarURL()}` });

    interaction.reply({ embeds:  [embed] });

  },
};