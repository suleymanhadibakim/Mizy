const Discord = require('discord.js');

const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  let ip = args[0];


if (!ip) {
  
  
const embed = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - IP İstatistik`)
.setColor('RANDOM')
.setDescription(`**\n**:x: Ip Adresi yazmalısınız! \n\n**\`\`\` Doğru Kullanım :: ${ayarlar.prefix}ip IP Adres\`\`\`** `)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )

 return message.channel.send(embed);
 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       var request = require('request');request.get(`http://ip-api.com/json/${ip}?fields=3401727`, function (error, response, body) {if (error) return console.log('Hata:', error);else if (!error) {var veri = JSON.parse(body);

const embed = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - IP İstatistik`)
.setColor('RANDOM')
.setDescription(`**\n**
${veri.query} İstatistikleri

Ülker :: ${veri.country}

Şehir :: ${veri.city}

Ülke Kodu :: ${veri.countryCode}

Bölge :: ${veri.region}

Bölge Adı :: ${veri.regionName}

Zip Kodu :: ${veri.zip}

Saat Dilimi :: ${veri.timezone}

Organizasyon :: ${veri.org}

Kıta :: ${veri.continent}

Mobilmi :: ${veri.mobile}

Proxy :: ${veri.proxy}
**\n**
`)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )
return  message.channel.send(embed);
   
    }
});

} 

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "kullanıcı",
  permLevel: 0
};

module.exports.help = {
  name: 'ip',
  description: 'İftar Saati Gösterir.',
  usage: 'ip <şehir>'
};