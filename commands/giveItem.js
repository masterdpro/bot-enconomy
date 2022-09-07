const { SlashCommandBuilder } = require("@discordjs/builders");
const { capitalizeFirstLetter, addItem } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("giveitem")
    .setDescription("utilise ton épée en bois")
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(true))
    .addStringOption(option =>
      option.setName("item").setDescription("entré le nom de l'item").setRequired(true),
    ),
  async execute(interaction) {
    const member = interaction.options.getMember("user", true);
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const item = itemName;
    addItem(member, item);
    interaction.reply(`vous avez donnez ${item} a ${member}  (</inventory:1009850854213435423>)`);
  },
};
