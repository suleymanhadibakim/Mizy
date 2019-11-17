const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   let mesaj = args.slice(0).join(' ');
   
   let dk = await db.fetch(`dk_${message.guild.id}`)    
   let kanal = client.channels.get(dk)
   if (!mesaj) return message.channel.send("Ne Duyurusu Yapacağınıda Yaz Bari")
   //  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Duyuru Yapabilmek İçin `Yönetici` Yetkisine Sahip Olmakn Gerekli')     
   if (db.has(`dk_${message.guild.id}`) != true) { return message.channel.send("Duyuru Kanalı Ayarlamamışsın ayarlamak İçin `i!duyuru-kanal #kanal`"); }
   
let embed = new Discord.RichEmbed()
.setDescription(mesaj)
.setColor("BLUE")

kanal.send("@everyone", embed)
message.reply("Duyuru Başarıyla Yapıldı")
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["duyur"],
 kategori: "moderasyon",
 permLevel: 4
};

exports.help = {
 name: 'duyuru',
 description: "Ayarladığınız duyuru Kanalında duyuru Yapar",
 usage: ""
};