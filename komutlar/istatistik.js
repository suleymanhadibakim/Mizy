const commando = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (bot, msg, args) => {
var message = await msg.channel.send('İstatikler alınıyor...')

		var osType = await os.type();

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
    let botping = new Date() - message.createdAt;

		var embed = {
			color: 3447003,
			description: '**İstatistikler**',
			fields: [
				{
					name: '❯ Sunucu işletim sistemi',
					value: `${osType}`,
					inline: false
				},
				{
					name: '❯ Bellek kullanımı',
					value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
					inline: false
				},
        {
					name: '❯ Ping',
					value: stripIndents`
         	• Bot Ping: ${Math.floor(botping)}ms
					• Api Ping: ${bot.ping}ms
         `,
					inline: false
				},
				{
					name: '❯ Genel istatistikler',
					value: stripIndents`
					• Sunucu: ${bot.guilds.size}
					• Kanal: ${bot.channels.size}
					• Kullanıcı: ${bot.guilds.reduce((p, c) => p + c.memberCount, 0)}
					`,
					inline: false
				},
				{
					name: '❯ Sürümler',
					value: stripIndents`
					• Bot:  ${bot.ayarlar.version}
					• Discord.js: v${Discord.version}
					• Discord.js-commando: v${commando.version}
					• Node: ${process.version}
					`,
					inline: false
				}
			],
			thumbnail: { url: bot.user.avatarURL }
		};
		
		return message.edit('', {embed});

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["i"],
    permLevel: 0
}

exports.help = {
    name: 'istatistik',
    description: 'Botun İstatistiklerini Gösterir',
    usage: ""
}