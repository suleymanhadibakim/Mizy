const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Üzgünüm, Kullanıcıların kaç Kişiyi Davet Ettiğini Görmek için Yeterli İzne Sahip Değilim.');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username}:** ${invites.uses} **`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor(0x2eff00)
        .addField('Üyeler ve Davet Ettikleri Kişiler', `${possibleinvites.join('\n')} `)
        .setTimestamp();
    message.channel.send(embed);
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
      kategori: "sunucu",
  permLevel: 0 
};

exports.help = {
  name: 'invites', 
  description: 'Sunucudaki İnviteleri Sırala',
  usage: 'invites <işlem>'
};