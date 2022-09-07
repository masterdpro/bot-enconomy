module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "erreur durant le procedée de la commande", ephemeral: true });
    }
  },
};