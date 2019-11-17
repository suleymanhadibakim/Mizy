const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeye almak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  };

  db.set(`karaliste_${user.id}`, "aktif")
    let gg = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${user.tag} Imam-Bot'ta Karalisteye Alındın`)
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeye alındı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste","bl"],
   kategori: "sahip",
  permLevel: 5
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};