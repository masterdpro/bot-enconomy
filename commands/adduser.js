const { SlashCommandBuilder } = require("@discordjs/builders");
const { createMember } = require("../utils/utilities");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("adduser")
  .setDescription("commence ton aventure")
  .addUserOption(option => option.setName("user")
      .setDescription("utilisateur a qui vous voulez faire subire votre puissant").setRequired(true)),

  async execute(interaction) {
    
    const member = interaction.options.getMember("user", true);
    createMember(interaction.member);
    return interaction.reply("bienvenue a toi et bonne aventure");
  },
};

