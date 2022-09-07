const { SlashCommandBuilder } = require("@discordjs/builders");
const { addMoney } = require("../utils/utilities");
const ms = require("parse-ms");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("donné de l'Argent"),
  async execute(interaction) {

    const author = interaction.user.id;
    const timeout = 600000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
      const time = ms(timeout - (Date.now() - author));
      return interaction.reply(`Vous devez attendre ${time.seconds} secondes avant de pouvoir travailler`);
    } else {
      const number = Math.floor(Math.random() * (10 - 1) + 1);
      addMoney(interaction.member, number);
      return interaction.reply(`Vous avez gagné ${number} coins`);
    }


  },
};
