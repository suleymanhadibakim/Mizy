const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Sunucu ID si Gir`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "sahip",
  permLevel: 5
};

exports.help = {
  name: 'invite',
  description: 'Sahip',
  usage: 'invite'
};