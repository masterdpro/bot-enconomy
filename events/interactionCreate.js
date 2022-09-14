module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    
    await command.execute(interaction, client);

    } else if (interaction.isButton())
    {
      const btn = client.buttons.get(interaction.customId);
        if (!btn) return interaction.reply('se boutton existe pas');
        btn.execute(client, interaction);
    }
  },
}