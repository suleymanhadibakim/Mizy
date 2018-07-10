const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=374955269190582294) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor(0xf2690e)
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur'],
  permLevel: 4
};

exports.help = {
  name: 'dmmesaj',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'dmmesaj [duyurmak istediğiniz şey]'
};