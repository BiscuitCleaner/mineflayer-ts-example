import mineflayer from 'mineflayer'

const bot = mineflayer.createBot({
    host: "localhost",
    port: 25565,
    username: "Bot",
    auth: "microsoft",
    version: "1.19.2"
})

bot.on("kicked", (reason) => {
    console.log(reason)
})
bot.on("error", (err) => {
    console.log(err)
})