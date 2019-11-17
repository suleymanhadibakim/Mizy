const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('**aç** veya **kapat** Yazmalısın!')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`everyone_${message.guild.id}`, 'acik')
      message.channel.send('Everyone Engelleme Başarıyla Açıldı! `Üyeleri Yasakla` Yetkisine Sahip Olanların Everyonesi Engellenmicektir.')
  }
  if (args[0] == 'kapat') {
    db.set(`everyone_${message.guild.id}`, 'kapali')
      message.channel.send('Everyone Engelleme Başarıyla Kapatıldı.')
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam', "everyone","everyone-engel"],
      kategori: "ayarlar",
  permLevel: 4
};

exports.help = {
  name: 'everyone-engelle',
  description: 'Everyone engelleme sistemini açıp kapatmanızı sağlar.',
  usage: 'everyone-engelle <aç> veya <kapat>'
};