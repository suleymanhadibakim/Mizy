const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

  if (!args[0]) return message.channel.send("Lütfen Soru Yazınız")
var request = require('request');
request('https://thaypon-api.glitch.me/api/8ball', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
       const embed = new Discord.RichEmbed()
        .setTitle(`${args[0]}`)
        .setImage(`${info.link}`)
        .setColor(0x36393F)   
      return message.channel.sendEmbed(embed)

    
}
      })
      };

exports.conf = {
  enabled: true,
  guildOnly: false,
    kategori: "eğlence",
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  kategori: "Eğlence",
  description: '8ball A Soru Sorarsın',
  usage: '8ball'
};