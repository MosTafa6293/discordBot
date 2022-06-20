const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = process.env.TOKEN

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("Hello my friend!")
    }
})

client.login(TOKEN)