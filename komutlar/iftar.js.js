const Discord = require('discord.js');

const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
message.delete()
  
  let Sehir = args[0];


if (!Sehir) {
  
  
const embed = new Discord.RichEmbed()
.setTitle(`🕋 ${message.guild.name} - Şehire Göre İftar Vakti`)
.setColor('RANDOM')
.setThumbnail('https://i.ibb.co/tKGXQ5b/3.png')
.setDescription(`**\n**:x: Şehir Adı yazmalısınız! \n\n**\`\`\` Doğru Kullanım :: ${ayarlar.prefix}iftar <şehir>\`\`\`** `)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )

 return message.channel.send(embed);
 }
  
var request = require('request');
request(`https://simsekapi.cf/YOc0qCd6uj/namaz/${encodeURIComponent(Sehir)} `, function (error, response, body) {
if (error) return console.log('Hata:', error);
else if (!error) {
var veri = JSON.parse(body);
        

const embed = new Discord.RichEmbed()
.setTitle(`🕋 ${message.guild.name} - Şehire Göre İftar Vakti`)
.setColor('RANDOM')
.setThumbnail('https://i.ibb.co/tKGXQ5b/3.png')
.setDescription(`**\n**
🌿 ${Sehir} İçin İftar Saati  ::** ${veri.iftarakalan} **
**\n**
`)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )
return  message.channel.send(embed);
   
    }
});

} 

module.exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'iftar',
  description: 'İftar Saati Gösterir.',
  usage: 'iftar <şehir>'
};