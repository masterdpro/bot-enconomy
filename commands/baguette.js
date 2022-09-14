const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory, removeItem } = require("../utils/utilities");
const shop = require("../utils/shop");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("baguete")
    .setDescription("utilise ta baguette"),
    async execute(interaction) {
    const memberInventory = await getMemberInventory(interaction.member);

    const itemName = ("Baguette");
    const item = shop[itemName];
    if (!memberInventory.includes(itemName)) return interaction.reply({content:"vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)", ephemeral:true});
    removeItem(interaction.member, item);
    return interaction.reply("oui oui baguette !")
  },
};
