const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
// I actually havent tested this since I don't use vanilla discord.js, but it should work

const { get } = require('request-promise-native') // You can also use normal request if you want, you would just lose the ability of using .then(). Or you could just use snekfetch

module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.reply("Bu Komut Sadece NSFW Kanallarında Kullanılabilir");

    var subreddits = [
"blowjob",
"Blowjob",
"BLOWJOB"
        
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setFooter("Blowjob").setTimestamp()
                .setImage(url);
            message.channel.send({
                embed
            });
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
    name: "blowjob",
    description: "Rastgele Blowjob Fotoğrafları Atar",
    usage: "blowjob"
}