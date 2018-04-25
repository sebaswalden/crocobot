const Telegraf = require('telegraf')
const config = require('./config.json')

const bot = new Telegraf(config.token)

bot.start((ctx) => ctx.reply('No creen que soy precioso?'))
bot.help((ctx) => ctx.reply('Todavia no soy de mucha ayuda. Lo siento.'))
bot.on('sticker', (ctx) => ctx.reply('Tas re gato 👍'))
bot.hears('hi', (ctx) => ctx.reply('Hola preciosa.'))
bot.hears(/buy/i, (ctx) => ctx.reply('Maldito comprador compulsivo hijo del capitalismo. Viva Lenin.'))

bot.startPolling()