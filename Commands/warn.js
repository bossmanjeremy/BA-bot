const { Client, Message, MessageEmbed, MessageManager } = require('discord.js')

module.exports = {
    name: 'Warn',
    description: 'Warns a user',

    /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author
        const reason = args.join(' ')
        const embed = new MessageEmbed()
        
        .setTitle("User Warned")
        .setColor(0x125400)
        .setDescription(`${reason}`)
        message.reply({ embeds: [embed] })
    }
}