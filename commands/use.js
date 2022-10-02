const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory, removeItem, capitalizeFirstLetter, hpup } = require("../utils/utilities");
const shop = require("../utils/shop");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("use")
    .setDescription("utilise tes item")
      .addStringOption(option =>
        option.setName("item").setDescription("entré le nom de l'item").setRequired(true))
      .addUserOption(option => 
        option.setName("user").setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(false)),
        async execute(interaction) {
    const member = interaction.options.getMember("user");
    const memberInventory = await getMemberInventory(interaction.member);
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const item = shop[itemName];
    const itemS = item.sanction
    if (!memberInventory.includes(itemName)) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
    if (item.sanction == 0) return interaction.reply(`${item.usage}`)
    if (item.sanction > 0 && member == " ") return interaction.reply(" pour utiliser litem tu dois cibler une personne")
    if (item.sanction > 0 && member != " ") {
      removeItem(interaction.member, item);
      return interaction.reply(` ${member} ${item.usage}!`),
      hpup(member, itemS);
    }
    
    
  },
};