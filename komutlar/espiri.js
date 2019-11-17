exports.run = (client, message, args) => {
var request = require('request');
request('https://simsekapi.cf/YOc0qCd6uj/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
    }
    return message.channel.send(veri.espri);
});
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'espiri',
  description: 'Bot Espiri Yapar',
  usage: 'espiri'
};