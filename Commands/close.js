const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js')
const Discord = require('discord.js')
const { execute } = require('./info')

module.exports = {
    name: 'close',
    description: 'Closes a ticket',

        /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        if(!message.channel.name.includes('ticket-')) return message.channel.send('You can only close tickets!')
        if(message.channel.name.startsWith('ticket-')){
            message.channel.delete()
        }
    }
}