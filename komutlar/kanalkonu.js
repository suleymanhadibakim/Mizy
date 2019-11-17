const Discord = require('discord.js');
exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("Kanalın konusunu ne yapmam gerektiğini söyle veya sıfırlamak istiyorsan sıfırla yaz!")
  
  if(args === 'sıfırla') {
    message.channel.setTopic('')
  .then(newChannel => message.channel.send(`Bu kanalın konusu sıfırlandı`))
  } else {
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni konusu **${args}**`))
  
  .catch(console.error);
  }};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalkonu'],
   kategori: "moderasyon",
  permLevel: 4
};
exports.help = {
  name: 'kanalkonusu',
  description: 'Bulunduğunuz kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};
