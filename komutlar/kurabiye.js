const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.sendMessage(`<@${message.author.id}> Canım gel buraya sana kurabiye vereceğim!`)
  message.react("🍪")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
   kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'kurabiye',
  description: 'Size Kurabiye Verir.',
  usage: 'kurabiye'
};
