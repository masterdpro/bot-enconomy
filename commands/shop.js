const { SlashCommandBuilder } = require("@discordjs/builders");
const shop = require("../utils/shop");
const { capitalizeFirstLetter, getMemberInventory, buyItemFromShop, sellItemFromShop, getMemberMoney } = require("../utils/utilities");
// const { addMoney } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("endroit ou achter des choses")
    .addSubcommand(subcommand => subcommand.setName("show").setDescription("montré le shop"))
    .addSubcommand(subcommand =>
      subcommand
        .setName("buy")
        .setDescription("achter un article")
        .addStringOption(option => option.setName("item").setDescription("item que tu veux acheter").setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("sell")
        .setDescription("vendre un article")
        .addStringOption(option => option.setName("item").setDescription("item que tu veux vendre").setRequired(true))
    ),

  async execute(interaction) {
    const memberMoney = await getMemberMoney(interaction.member);
    const memberInventory = await getMemberInventory(interaction.member);

    switch (interaction.options.getSubcommand()) {
    case "show": {
      const shopItems = Object.entries(shop);
      interaction.reply(`\`\`\`${shopItems.map(item => `${item[0]} - ${item[1].price} coins`).join("\n")}\`\`\``);
      break;
    }
    case "buy": {
      const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
      const item = shop[itemName];
      if (!item) return interaction.reply("assure toi que tu a bien orthographier l'item");
      if (memberMoney < item.price) return interaction.reply("assure toi que tu assez de coins </balance:1009850854213435422>");
      if (item.price == 0) return interaction.reply("tu ne peux pas acheter cet item, cela veux dire qu'il est rare^^");
      buyItemFromShop(interaction.member, item);
      interaction.reply(`vous avec acheter ${item.name} pour le pris de ${item.price}  (</inventory:1009850854213435423>)`);
      break;
    }
    case "sell": {
      const itemName = capitalizeFirstLetter(interaction.options.getString("item"));
      const item = shop[itemName];
      if (!memberInventory.includes(itemName)) return interaction.reply("vous n'avez pas l'item en question dans votre inventaire (</inventory:1009850854213435423>)");
      if (item.price == 0) return interaction.reply("tu ne peux pas vendre cet item, cela veux dire qu'il est rare^^");
      sellItemFromShop(interaction.member, item);
      interaction.reply(`vous avez vendu ${item.name} pour le pris de ${item.price}  (</inventory:1009850854213435423>)`);
      break;
    }
    }
  },
};

