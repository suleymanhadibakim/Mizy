const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    var subreddits = [
        'AsianHotties',
        'juicyasians',
        'asianbabes'
    ]
    
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))]; 

 if(!message.channel.nsfw) {
return message.channel.send(`:underage: **burası NSFW Kanalı Değil NSFW!** :angry: `)
}
  
  else{
  randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Assian NSFW`)
                .setFooter(`Çapkın seni ${message.author.tag}`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
    kategori: "NSFW",
  permLevel: 0
};

exports.help = {
  name: 'assian',
  description: 'Sadece NFSW Kanallarında Geçerli.',
  usage: 'assian'
};
