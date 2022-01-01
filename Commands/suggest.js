const { Client, Message, MessageEmbed} = require('discord.js')
const { execute } = require('./info')

module.exports = {
    name: 'suggest',
    description: 'Displays a suggestion',

        /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const channel = message.guild.channels.cache.find(c => c.name === '『➕』suggestions');
        if (!channel) return message.channel.send("Please kindly ask drilinz to set the suggestions channel!")

        const messageArgs = args.join(' ');
        const embed = new MessageEmbed()
        .setColor(0x125400)
        .setFooter("Made by drilinz")
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);
        message.reply("Your suggestion has been submitted!")
        channel.send({ embeds: [embed] }).then((msg) => {
            msg.react('✅')
            msg.react('❌')
        })
    }
}