const { SlashCommandBuilder } = require("@discordjs/builders");
const { capitalizeFirstLetter, removeItem, getMemberInventory } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removeitem")
    .setDescription("retire litem de quelqu'un")
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(true))
    .addStringOption(option =>
      option.setName("item").setDescription("entré le nom de l'item").setRequired(true),
    ),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
    const item = itemName;
    const memberInventory = await getMemberInventory(interaction.member);
    if (!memberInventory.includes(itemName)) return interaction.reply("se membre n'a pas l'item en question dans son inventaire (</inventory:1009850854213435423>)");
    removeItem(member, itemName);
    interaction.reply(`vous avez retiré **${item}** a ${member}`);
  },
};
