const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  if(!args[0]) return message.channel.send('Yanlış Kullanım: **i!tersyaz (Ters Yazılacak Mesaj)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')} Yazmam İçin Kelime Girmelisin!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Normal Hali: ', '```' + `${args.join(' ')}` + '```')
  .addField('Ters Hali: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
      kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'tersyaz',
  description: "Mesajınızı Ters Çevirir",
  usage: 'tersyaz <aranacak gif>'
};