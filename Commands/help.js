const { Client, Message, MessageEmbed, MessageManager } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Lists all the commands',

    /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed({size:1024,dynamic:true})

        .setTitle("British Army Services")
        .setColor(0x125400)
        .setFooter("Made by drilinz")
        .addField("-info [mention]", "Displays a users account information.")
        .addField("-pfp [mention]", "Displays a users profile picture.")
        .addField("-warn [mention]", "Warns the mentioned player. [broken rip]")
        .addField("-ticket", "Creates a support ticket.")
        .addField("-close", "Closes the ticket you sent the command in.")
        .addField("-suggest [suggestion]", "Submits a suggestion in the suggestions")
        .addField("-help", "Shows a list of available commands.")
        message.reply({ embeds: [embed] })
    }
}