const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, params, args) => {
    // if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Duyuru kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send(':no_entry: Duyuru Kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `i!duyuru-kanal #kanal`')
     db.set(`dk_${message.guild.id}`, message.mentions.channels.first().id)
        message.channel.send(`:white_check_mark: Duyuru kanalı, <#${message.mentions.channels.first().id}> olarak ayarlandı.`)        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["duyurukanal","duyuru-kanal","duyuru-kanal-ayarla"],
      kategori: "ayarlar",
 permLevel: 4
};

exports.help = {
 name: 'duyurukanalayarla',
 description: "Duyuru Kanalı Ayarlar",
 usage: ""
};