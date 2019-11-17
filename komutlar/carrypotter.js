const Discord = require('discord.js');

const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
var request = require('request');
request(`https://simsekapi.cf/YOc0qCd6uj/twitch/carrypotter`, function (error, response, body) {
if (error) return console.log('Hata:', error);
else if (!error) {
var veri = JSON.parse(body);
        

const embed = new Discord.RichEmbed()
.setTitle(`Carry Potter Twitch İstatistikleri`)
.setURL(veri.kanalurl)
.setColor('RANDOM')
.setDescription(`**\n**
Kullanıcı Adı :: **${veri.gorunenisim}**
Biyografi :: **${veri.biyografi}**
Oluşturma Tarihi :: **${veri.olusturma}**
Son Güncelleme :: **${veri.guncelleme}**


Yayın Başlığı :: **${veri.yayinbasligi}**
Toplam İzlenme :: **${veri.yayintoplamizlenme}**
Yayın Oyunu:: **${veri.yayinoyun}**
Yayın İzlenme :: **${veri.yayinsuanizlenme}**

**\n**
`)
.setTimestamp()
.setImage(veri.kanallogo)
.setThumbnail(veri.yayinresim)
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )

   message.channel.send(embed)

   
    }
});

} 

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:"kullanıcı",
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'carrypotter',
  description: '',
  usage: 'carrypotter'
};