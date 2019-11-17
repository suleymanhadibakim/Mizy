const Discord = require('discord.js');
const randomPuppy = require('random-puppy')
const request = require('request')

module.exports.run = async(bot, message, args) => {
request('http://aws.random.cat/meow', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
  const foto = new Discord.RichEmbed()
  .setImage(info.file)
      message.channel.send(foto)
    }
})
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
   kategori: "kullanıcı",
  aliases: ['cat'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'Kedi Fotoğrafı Atar.',
  usage: 'kedi'
};
