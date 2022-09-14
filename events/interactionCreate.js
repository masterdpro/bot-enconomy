module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "erreur durant le procedée de la commande", ephemeral: true });
    }} else if (interaction.isButton()){
      const btn = client.buttons.get(interaction.customId);
        if (!btn) return interaction.reply('se boutton existe pas');
        btn.runInteraction(client, interaction);
    }
  },
};