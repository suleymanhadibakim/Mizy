const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir ID girmelisin!')
  
  db.delete(`karaliste_${nesne}`)
  message.channel.send(`**${nesne}** IDli kullanıcı beyaz listeye alındı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['wl'],
      kategori: "sahip",
  permLevel: 5
};
exports.help = {
  name: 'beyazliste',
  description: '[Admin Komutu]',
  usage: 'beyazliste <ID>'
};