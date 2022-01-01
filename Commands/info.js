const { Client, Message, MessageEmbed, MessageManager } = require('discord.js')

module.exports = {
    name: 'Info',
    description: 'Displays a users account information',

    /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
        
        .setTitle(user.username)
        .setDescription('Displays a users profile information')
        .setImage(user.displayAvatarURL({size:1024,dynamic:true}))
        .setColor(0x125400)
        .addField('Discriminator', user.tag)
        .addField('ID', user.id)
        .setTimestamp()
        .addField('Creation Date', user.createdAt.toLocaleDateString())
        message.reply({ embeds: [embed] })
    }
}