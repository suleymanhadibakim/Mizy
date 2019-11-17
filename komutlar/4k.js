const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {

  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Burası NSFW Kanalı Değil!")
  }
};    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: "NSFW",
  permLevel: 0
};

exports.help = {
  name: '4k',
  kategori: "NSFW",
  description: '4K NSFW Fotoğrafı Atar',
  usage: '4k'
};