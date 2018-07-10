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
    .setAuthor(`Kullanıcı ve Eğlence Komutları`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Komutlar", "!!twerk :   Twerk Yapan Gif çıkar \n!!çekiç : Seçtiniz Kişiye Çekiç Atar\n!!çayiç:   Çay İçer\n!!çayaşekerat:   Çaya Şeker Atar\n!!herkesebendençay:  Herkeze Çay Ismarlarsınız\n!!yumruh-at: Yumruk Atarsınız\n!!yaz:  Bota istedinizi Yazdırırsınız\n!!söv: Etiketlediniz Kişiye Söver\n!!koş: Koşar\n!!elektirikçarp:: Trump A Elektirik Çarpar\n!!avatarım: Avatarınızı Gösterir\n!!ters Yazdınız Bi Kelimeyi Ters Yazılışını Yazar\n!!zekam: Zekanızı Ölçer\n!!espriyap: Espiri Yapar\n!!sigara:  Sigara İçer\n!!syt: Yazdığınız Şikayeti Sunucunun Kurucusuna Gönderir\n!!tavsiye: Tavsiyelerinizi Yazın")
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
  name: 'eğlence',
  description: 'Bütün komutlar.',
  usage: 'eğlence'
};