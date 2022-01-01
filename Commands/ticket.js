const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js')
const Discord = require('discord.js')
const { execute } = require('./info')

module.exports = {
    name: 'ticket',
    description: 'Creates a ticket',

        /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    async execute(bot, message, args) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("Support Ticket")
        embed.setDescription("Thank you for contacting BA Support! A member of our PATROL team will help you shorty. Until then, please state your issue.")
        embed.setColor(0x125400)
        embed.setFooter("Made by drilinz")
        embed.setTimestamp();

        let ticketChannel = await message.guild.channels.create(`ticket-${message.author.id}`, {
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id,
                    deny: "VIEW_CHANNEL",
                }, {
                    id: message.author.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"],
                },
            ]
        })
        ticketChannel.send({ embeds: [embed] })
        ticketChannel.send(`<@&925913304487047238> <@&925913297574846574> <@${message.author.id}>`)
        message.reply("Successfully created a ticket!")
    }
}