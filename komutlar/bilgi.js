const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('HATA', '"__botbilgi__" komutu özel mesajlarda kullanılmaz**.**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .addField("Bot Sahibi:", `» <@374955269190582294>`, true)
    .addField("Toplam Kullanıcı Sayısı:", "" + client.users.size + "", true)
    .addField("Toplam Sunucu Sayısı:", "" + client.guilds.size + "", true)
    .addField("Kitaplık Türü:", "discord.js", true)
    .addField("Version:", "0.0.1", true)
    .addField("Toplam Kanal Sayısı:", "" + client.channels.size + "", true)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'botbilgi'
};
