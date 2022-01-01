const { Client, Message, MessageEmbed, MessageManager } = require('discord.js')
const { execute } = require('./info')

module.exports = {
    name: 'pfp',
    description: 'Displays a users profile picture',

        /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
        .setImage(user.displayAvatarURL({size:1024,dynamic:true}))
        .setColor(0x125400)
        message.reply({ embeds: [embed] })
    }
}