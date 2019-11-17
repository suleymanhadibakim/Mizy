const Discord = require('discord.js');
const randomPuppy = require('random-puppy')
const request = require('request')

module.exports.run = async(bot, message, args) => {

request('https://random.dog/woof.json', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
  const foto = new Discord.RichEmbed()
  .setImage(info.url)
      message.channel.send(foto)
    }
})
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ld'],
   kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'köpek <süre>'
};
