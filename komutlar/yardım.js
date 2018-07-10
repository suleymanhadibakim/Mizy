const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('HATA', '"Yardım Menüleri" komutu özel mesajlarda kullanılmaz**.**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(`Yardım Komutları`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Komutlar", "**!!eğlence =** Eğlence komutlarını gösterir. \n**!!yetkili =** Yetkili komutlarını gösterir. \n") 
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün komutlar.',
  usage: 'yardım'
};