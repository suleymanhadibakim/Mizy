const Discord = require ("discord.js")

exports.run = (client, message, params) => {

    var sans = ["-5 aqu", "11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "200 IQ Player", "Albert Einstein mısın krdşm", "Sen Bir Malsın"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['iq'],
      kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'zekam',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'zekam'
};
