const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
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
     kategori: "NSFW", 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'göt',
  description: 'Sadece NFSW Kanallarında Geçerli.',
  usage: 'göt'
};
