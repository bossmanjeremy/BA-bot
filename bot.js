const { Client, Intents, Message } = require('discord.js');
const noblox = require('noblox.js');
const config = require('./config.json')
const Token = config.Token
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { readdirSync } = require('fs')
bot.commands = new Map()

const commands = readdirSync('./Commands').filter(file =>
    file.endsWith('js')
)

for (command of commands) {
    const file = require(`./Commands/${command}`)
    bot.commands.set(file.name.toLowerCase(), file)
}

bot.on('ready', () => {
    console.log('British Army Services is up and running!')
    bot.user.setActivity({ name: 'drilinz on the toilet', type: 'WATCHING' })
    noblox
        .setCookie(config.Cookie)
        .then((user) =>
            console.log(`Logged into ${user.UserName} (${user.UserID})`)
        )
        .catch((err) => console.log(err))
})

bot.on('messageCreate', (message) => {
    if (message.author.bot) return
    if (!message.channel.type === 'dm') return

    const prefix = "-"
    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()

    if (!bot.commands.has(command)) return

    bot.commands.get(command).execute(bot, message, args)
})

bot.login(Token)