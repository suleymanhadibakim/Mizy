const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **burası NSFW Kanalı Değil NSFW!** :angry: `)}
  else{
  randomPuppy('amateur')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Amatör NSFW`)
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
  name: 'amatör',
  description: 'Sadece NFSW Kanallarında Geçerli.',
  usage: 'amatör'
};
