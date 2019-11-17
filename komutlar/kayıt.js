const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const hrfler = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler2 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler3 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler4 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]
const hrfler5 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]

exports.run = (client, message, args) => {

let prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix


let kk = db.fetch(`kayitk_${message.guild.id}`)
  let kod = db.fetch(`kod_${message.author.id}`)
  let acik = db.fetch(`kayıtsis_${message.guild.id}`)
    if (args[0] === "alrol") {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
    let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(0).join(' '));
   if (!args[1]) {
        return message.reply(`Lütfen bir rol etiketleyin veya rol adını yazın örnek: **${prefix}kayıtalrol @rol** veya **${prefix}kayıtalrol rol-adı** `)
    }
    if(args[1] === 'kapat') {
   if (db.has(`aRole_${message.guild.id}`) === true) {
     message.channel.send(`Kayıt Alacağı rol başarıyla kaldırıldı`)
     db.delete(`aRole_${message.guild.id}`)
     return
}
if(args[1] == 'kapat') {
  if (db.has(`verRol_${message.guild.id}`) == false) {
 return message.channel.send(`kayıt vereceği rolü ayarlanmamış.`)
  }}
  message.channel.send(`kayıt alacağı rolü ayarlanmamış.`)
    return
  
  }  
   if (args[1] == role){    
  db.set(`aRole_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Kayıt Alacağı rolü başarıyla ayarlandı: **${role.name}**\nKayıt rolünü kapatmak isterseniz **${prefix}kayıt alrol kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
   }
}
       if (args[0] === "verrol") {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
    let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(0).join(' '));
   if (!args[1]) {
        return message.reply(`Lütfen bir rol etiketleyin veya rol adını yazın örnek: **${prefix}kayıtalrol @rol** veya **${prefix}kayıtalrol rol-adı** `)
    }
    if(args[1] === 'kapat') {
   if (db.has(`verRol_${message.guild.id}`) === true) {
     message.channel.send(`Kayıt Vereceği rol başarıyla kaldırıldı`)
     db.delete(`verRol_${message.guild.id}`)
     return
}
}
if(args[1] == 'kapat') {
  if (db.has(`verRol_${message.guild.id}`) == false) {
 return message.channel.send(`kayıt vereceği rolü ayarlanmamış.`)
  }}
    
     if (args[1] == role){ 
    db.set(`verRol_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Kayıt Vereceği rolü başarıyla ayarlandı: **${role.name}**\nKayıt rolünü kapatmak isterseniz **${prefix}kayıt verrol kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
     }
}
       if (args[0] === "kanal") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
    let kanal = message.mentions.channels.first()
 if (!args[1]) {
        return message.reply(`Lütfen bir kanal etiketleyin örnek: **${prefix}kayıt kanal #kanal** yada **${prefix}kanıt kanal sil**`)
    };
    if(args[1] === 'kapat') {
   if (db.has(`kayitk_${message.guild.id}`) === true) {
     message.channel.send(`Kayıt Kanalı başarıyla kaldırıldı`)
     db.delete(`kayitk_${message.guild.id}`)
     return
}
  }    

     if (args[1] == kanal) {
     db.set(`kayitk_${message.guild.id}`, kanal.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Kayıt Kanalı başarıyla ayarlandı: **${kanal.name}**\nKayıt Kanalı kapatmak isterseniz **${prefix}kayıt kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
     }
}
   if (args[0] === "aç") {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
     db.set(`kayıtsis_${message.guild.id}`,"acik")
     message.channel.send(`Kayıt Sitemi Başarıyla Aktif Edildi`)
   }
   if (args[0] === "kapat") {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
     db.delete(`kayıtsis_${message.guild.id}`)
     message.channel.send(`Kayıt Sitemi Başarıyla Deaktif Edildi`)
   }
   if (db.fetch(`kayıtsis_${message.guild.id}`) === "acik")
{

  if (args[0] === "kodum") {
     message.reply(`Senin Kayıt Kodun \`${kod}\``)
   }
  var random = Math.floor(Math.random()*(hrfler.length-0+1)+0);
  var random2 = Math.floor(Math.random()*(hrfler2.length-0+1)+0);
  var random3 = Math.floor(Math.random()*(hrfler3.length-0+1)+0);
  var random4 = Math.floor(Math.random()*(hrfler4.length-0+1)+0);
  var random5 = Math.floor(Math.random()*(hrfler5.length-0+1)+0);
    
  var h1 = hrfler[random]
  var h2 = hrfler2[random2]
  var h3 = hrfler3[random3]
  var h4 = hrfler4[random4]
  var h5 = hrfler[random5]
  if (!args[0]) {
if (db.fetch(`verRol_${message.guild.id}`) == null) return message.channel.send("Bu Sunucuda Botun Vereceği Rol Ayarlanmadığı İçin Seni Kayıt Edemiyorum").then(msg => msg.delete(10000));

  var hpsi = h1 + h2 + h3 + h4 + h5
  db.set(`kod_${message.author.id}`, hpsi)
  message.delete()
if (db.fetch(`kayitk_${message.guild.id}`) != null){
 if (message.channel.id != kk) return message.reply(`Burası kayıt Kanalı Değil Bu Sunucudaki Kayıt Kanalı <#${kk}>`)                                                   
}  
message.author.send(`Kayıt Kodun \`${hpsi}\` Bu Kodu \`i!kayıt onay ${hpsi}\` Şeklinde Yazmalısın`)
  message.reply("Dmden Gelen Kodu i!kayıt onay şeklinde yazın").then(msg => msg.delete(10000))
  }
else if (args[0] === "onay") {
if (db.fetch(`kayitk_${message.guild.id}`) != null){
 if (message.channel.id != kk) return message.reply(`Burası kayıt Kanalı Değil Bu Sunucudaki Kayıt Kanalı <#${kk}>`)                                                   
}
if (!args[1]) return message.reply("Yanlış Kullanım Kod Yazmalısın `i!kayıt onay <kod>`").then(msg => msg.delete(10000));
if(args[1] !== kod) return message.reply("Hata! Kodunu Kontrol Et").then(msg => msg.delete(10000));

else if (args[1] == kod) {  
message.reply("Başarıyla Kayıt Oldun Sunucuya Hoşgeldin")
    if (db.fetch(`aRole_${message.guild.id}`) != null) {
    message.member.removeRole(db.fetch(`aRole_${message.guild.id}`));
    }   
     message.delete()
     message.member.addRole(db.fetch(`verRol_${message.guild.id}`))
}}
}
  if (db.has(`kayıtsis_${message.guild.id}`) === false) {
  return message.channel.send(`Bu Sunucuda Kayıt Sistemi Aktif Edilmemiş Aktif Etmek \`${prefix}kayıt aç\``);
  }
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt"],
  kategori: "kayıt",
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: "Mesajınızla ilgili gifleri Giphy'da aratır.",
  usage: 'kayıt'
};