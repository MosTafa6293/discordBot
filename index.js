const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = process.env.TOKEN

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("Hello my friend!")
    }
})

const welcomeChannel = "988381639035998238"

client.on("guildMemberAdd", async (member) => {
    const image = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannel).send({
        content: `Hey <@${member.id}>, Welcome to server!`,
        files: [image]
    })
})

client.login(TOKEN)