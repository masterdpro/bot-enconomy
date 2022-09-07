const { SlashCommandBuilder } = require("@discordjs/builders");
const { getMemberInventory, removeItem } = require("../utils/utilities");
const shop = require("../utils/shop");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("woodensword")
    .setDescription("utilise ton épée en bois")
    .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(true)),
  async execute(interaction) {
    const member = interaction.options.getMember("user", true);
    const memberInventory = await getMemberInventory(interaction.member);

    const itemName = ("Wooden_to_sword");
    const item = shop[itemName];
    if (!memberInventory.includes(itemName)) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
    removeItem(interaction.member, item);
    return interaction.reply(` ${member} c'est fait mettre K.O par votre épée en bois <:woodensword:1010938999998791730>`),
    await member.timeout(3 * 60 * 1000, "Vous avez été tué par un épée en bois");
  },
};
