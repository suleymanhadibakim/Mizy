const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
const paraemoji = client.emojis.find(emoji => emoji.name === "imamdolar");

    let timeout = 432000000 
    let amount = Math.floor(Math.random() * 3000) + 1;
    // Random Sayı Yapmak İstersen Math.floor(Math.random() * 1000) + 1;


    let soygun = await db.fetch(`soygun_${message.author.id}`);

    if (soygun !== null && timeout - (Date.now() - soygun) > 0) {
        let time = ms(timeout - (Date.now() - soygun));

        message.channel.send(`Bankayı Zaten Soydun **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`**Banka Soygunu**`)
    .addField(`Soygun`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`soygun_${message.author.id}`, Date.now())
        
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
    name: 'bankasoy',
  description: 'Banka Soyup Para Kazanırsın',
  usage: 'bankasoy'
};