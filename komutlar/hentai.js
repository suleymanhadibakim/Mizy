const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Burası NSFW Kanalı Değil!")
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
      kategori: "NSFW",
  permLevel: 0
};

exports.help = {
  name: 'hentai',
  description: 'Sadece NFSW Kanallarında Geçerlidir.',
  usage: 'hentai '
};
