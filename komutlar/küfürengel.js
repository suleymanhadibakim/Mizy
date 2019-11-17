const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('✅Aç yada Kapat yazmalısın! Örnek: i!küfürengel aç')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik')
      message.channel.send('✅ Küfur Engel başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanların küfürü engellenmicektir.')
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı')
      message.channel.send('✅ Küfür Engel başarıyla kapatıldı! Artık herkes küfür yazabilir.')
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
   kategori: "ayarlar",
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'küfürengel',
  description: 'küfürengel',
  usage: 'küfürengel'
};