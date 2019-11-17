const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {
    request('https://simsekapi.cf/YOc0qCd6uj/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
        message.channel.sendEmbed(new Discord.RichEmbed().setImage(veri.ataturk)); //
    }
})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["atatürk"],
   kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "atatürk-resimleri",
  description: "Rastgele atatükr fotoğrafları atar!",
  usage: "atatürk-resimleri"
};