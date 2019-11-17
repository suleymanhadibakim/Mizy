const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let user = args[0]

if (!user) return message.channel.send("Bir Instagram Hesabı Girmelisin")
var request = require('request');
request(`https://simsekapi.cf/YOc0qCd6uj/instagram/${user}`, function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
        console.log(veri.tamisim);
    }
  if(veri.hata) return message.channel.send(veri.hata)
else {
  const embed = new Discord.RichEmbed()
  .setAuthor(veri.kullaniciadi)
  .setTitle(veri.tamisim)
  .setDescription(`Kullanıcı Id: ${veri.kullaniciid}`)
  .setThumbnail(veri.profilfoto)
  .setColor("BLUE")      
  .addField("Takip İstatistikleri",`Takipçi: ${veri.takipci}\nTakip Ettiği: ${veri.takipettigi}`,true)
  .addField("Gönderi Sayısı:",veri.gonderi,true)
  .addField("Biyografi",`Biyografi: ${veri.biyografi}\nBiyografi Link: ${veri.biyografilink}`,true)
  .addField("Onaylımı",veri.onaylimi,true)
  .addField("Gizlimi",veri.gizlimi,true)
  message.channel.send(embed)
} 
});
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["insta"],
  kategori: "kullanıcı",
  permLevel: 0
}
exports.help = {
  name: 'instagram',
  description: "İstediğiniz Profilin İnstagram Bilgilerini Gösterir",
  usage: 'kayıt isim yaş'
}
 
