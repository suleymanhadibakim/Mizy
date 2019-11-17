const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Bu Komut Sadece NFSW Kanallarında Geçerlidir.")

    var subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "NSFW",
  permLevel: 0
};

exports.help = {
  name: 'cosplay',
  description: 'Cospilav NSFW',
  usage: 'cosplay'
};