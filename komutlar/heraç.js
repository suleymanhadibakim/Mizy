const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (!user) {
        return message.channel.send('Haraç Keseceğin Kişiyi Etiketlemelisin.')
    }
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send(':x: Haraç Kesmek İçin 250$ Paraya İhtiyacın Var.')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username} Kullanıcısının Hiç Parası Yok Haraç Kesemessin.`)
    }


    let random = Math.floor(Math.random() * 300) + 1; // random number 200-1, you can change 200 to whatever you'd like


    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} ${user} Kişisinden Haraç Kestin ${random} Kazandın!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
      kategori: "profil",
  permLevel: 0
};

exports.help = {
  name: 'haraçkes',
  description: 'Bir Kullnaıcıdan Haraç Kesaersiniz',
  usage: 'haraçkes '
};
