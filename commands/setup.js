const { SlashCommandBuilder } = require("@discordjs/builders");
const { createMember } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder().setName("setup").setDescription("commence ton aventure"),
  async execute(interaction) {
    createMember(interaction.member);
    return interaction.reply("bienvenue a toi et bonne aventure");
  },
};

