const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory, removeItem } = require("../utils/utilities");
const shop = require("../utils/shop");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("use")
    .setDescription("utilise tes item")
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(false))
      .addStringOption(option =>
        option.setName("item").setDescription("entré le nom de l'item").setRequired(true),
      ),
        async execute(interaction) {
    const member = interaction.options.getMember("user", true);
    const memberInventory = await getMemberInventory(interaction.member);
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const itemN = shop[itemName];
    const itemS = shop[itemSanction]
    const itemU = shop[itemUsage]
    if (!memberInventory.includes(itemName)) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
    if (itemS == 0) return interaction.reply(` ${itemU}!`)
    if (itemS > 0) {
      removeItem(interaction.member, itemN);
      return interaction.reply(` ${member} ${itemU}!`),
      await member.timeout(itemS, itemU);
    }
    
    
  },
};