const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sleep')
		.setDescription('Wishes goodnight!'),
	async execute(interaction) {
		await interaction.reply('Dobranoc :v');
	},
};