const { SlashCommandBuilder } = require("discord.js")

    module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0h6Ydo8onMNWmPWCohIw72?si=689c8906cac1432f")
    }
}