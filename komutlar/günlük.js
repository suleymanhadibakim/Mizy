const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 100
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(` Günlük Zaten Hediyeyi aldın **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Günlük`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Günlük Hediye**`)
    .addField(`Günlük`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ecow'],
      kategori: "profil",
  permLevel: 0
};

exports.help = {
  name: 'günlük',
  description: 'Günlük para kazanırsınız.',
  usage: 'günlük'
};