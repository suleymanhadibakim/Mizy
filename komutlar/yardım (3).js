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
    .setAuthor(`Yetkili Komutları`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Komutlar", "!!temizle: Belirtilen miktarda mesajı siler\n!!kilitle: Belirtilen Kanalı Kilitler\n!!at: Belirtilen Kişiyi Sunucudan Atar\n!!ban: Belirtilen Kişiyi Sunucudan Banlar\n!!unban Belirtilen Kişinin Sunucudan Banını Kaldırır\n!!sustur: Bir Kişiyi Susturur\n!!uyar: Belirtdiniz Kişiyi Uyarır\n!!çekiliş: Çekiliş Yapar ") 
    return message.channel.sendEmbed(sunucubilgi); 
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bütün komutlar.',
  usage: 'yetkili'
};