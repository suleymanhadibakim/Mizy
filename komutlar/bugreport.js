const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
if (!bug) return message.reply("Bug Report Yapıyonda Bug ne Onuda söyle Bari")
let user = message.author
let guild = message.guild
let kanal = message.channel
let channel = bot.channels.get("493514148773363756")
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug)
.addField("Kullanıcı Bilgi", `**Kullanıcı Adı**:${user.username}\n**Kullanıcı ID**: ${user.id}`, true)
.addField("Sunucu Bilgi", `**Sunucu Adı**: ${guild.name}\n**Sunucu ID**: ${guild.id}`, true)
.addField("Kanal Bilgi", `**Kanal Adı**: ${kanal.name}\n**Kanal ID**: ${kanal.id}`)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "bot",
  permLevel: 0  
};

exports.help = {
  name: 'bugreport',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bugreport'
}