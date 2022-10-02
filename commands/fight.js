const { SlashCommandBuilder } = require("@discordjs/builders");
const { hpup } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fight")
    .setDescription("Affronté un membre")
    .addStringOption(option =>
      option.setName("item").setDescription("entré le montant donné").setRequired(true),)
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez donner").setRequired(true)),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    const memberInventory = await getMemberInventory(interaction.member);
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const item = shop[itemName];
    const itemS = shop[itemSanction]
    if (!memberInventory.includes(itemName)) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
    return interaction.reply(await hpup(member, itemS));
  },
};
