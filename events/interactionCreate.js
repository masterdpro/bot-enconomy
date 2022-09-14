module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    if (interaction.isButton()){
      const btn = client.buttons.get(interaction.customId);
        if (!btn) return interaction.reply('se boutton existe pas');
        btn.runInteraction(client, interaction);
    }


    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "erreur durant le procedée de la commande", ephemeral: true });
    }
  },
};