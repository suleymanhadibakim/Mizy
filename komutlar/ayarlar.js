const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  

  let y = "- ";
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  var ac = client.emojis.get(client.emojiler.açıkA);
  var ka = client.emojis.get(client.emojiler.kapalıA);



  const sayfa = [`${message.guild.name} | Ayarları

${y}**Sunucu prefixi** ${prefix}
${y}**Mod log kanalı** ${db.has(`membermodChanel_${message.guild.id}`) ? `${ac} ${message.guild.channels.get(db.fetch(`membermodChannel_${message.guild.id}`)).name}` : `${ka} Ayarlanmamış **${prefix}mod-log-ayarla** `}
${y}**Davet kanalı** ${db.has(`dKanal_${message.guild.id}`) ? ac + message.guild.channels.get(db.fetch(`dKanal_${message.guild.id}`)) : `${ka} Ayarlanmamış **${prefix}davet-kanal-ayarla**`}  
${y}**Link engeli** ${db.has(`link_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}link-engelle**`}
${y}**Küfür engeli** ${db.has(`küfür_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}küfür-engelle**`}
${y}**Everyone engeli** ${db.has(`everyone_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}everyone-engel**`}
${y}**Otorol** ${db.has(`oRole_${message.guild.id}`) ? `${ac} \`@${message.guild.roles.get(db.fetch(`oRole_${message.guild.id}`)).name}\`` : `${ka} Ayarlanmamış **${prefix}oto-rol**`}
${y}**Otorol Kayıt Kanalı** ${db.has(`otoRkanal_${message.guild.id}`) ? `${ac} \`${message.guild.channels.get(db.fetch(`otoRkanal_${message.guild.id}`)).name}\`` : `${ka} Ayarlanmamış **${prefix}oto-rol-kanal**`}
${y}**Susturma rolü** ${db.has(`sRol_${message.guild.id}`) ? `${ac} \`@${message.guild.roles.get(db.fetch(`sRol_${message.guild.id}`)).name}\`` : `${ka} Ayarlanmamış **${prefix}sustur-rol-ayarla**`}
${y}**Sayaç kanalı** ${db.has(`sayacKanal_${message.guild.id}`) ? `${ac} ${message.guild.channels.get(db.fetch(`sayacKanal_${message.guild.id}`)).name}`: `${ka} Ayarlanmamış **${prefix}sayaç-kanal-ayarla** `}
${y}**Sayaç** ${db.has(`sayacSayi_${message.guild.id}`) ?`${ac} ${db.fetch(`sayacSayi_${message.guild.id}`)}` : `${ka} Ayarlanmamış **${prefix}sayaç-ayarla**`}
${y}**Otomatig tag** ${db.has(`tagB_${message.guild.id}`) ? ac + db.fetch(`tagB_${message.guild.id}`) : `${ka} Ayarlanmamış **${prefix}tag-ayarla**`}
${y}**Otomatig kayıt kanalı** ${db.has(`tagKanal_${message.guild.id}`) ? ac + message.guild.channels.get(db.fetch(`tagKanal_${message.guild.id}`)).name : `${ka} Ayarlanmamış **${prefix}tag-ayarla**`}
${y}**Resimli Giriş Çıkış kanalı** ${db.has(`giriş_${message.guild.id}`) ? `${ac} ${client.channels.get(db.fetch(`giriş_${message.guild.id}`))}` : `${ka} Ayarlanmamış **${prefix}giriş-çıkış-ayarla** `}
${y}**Giriş Çıkış kanalı** ${db.has(`gc_${message.guild.id}`) ? `${ac} ${client.channels.get(db.fetch(`gc_${message.guild.id}`))}` : `${ka} Ayarlanmamış **${prefix}giriş-çıkış-ayarla** `}
${y}**Giriş mesajı** ${db.has(`girisM_${message.guild.id}`) ? db.fetch(`girisM_${message.guild.id}`).replace("{kullanıcı}", "**{kullanıcı}**").replace("{user}", "**{user}**") : `${ka} Ayarlanmamış **${prefix}giriş-mesaj-ayarla**`}
${y}**Çıkış mesajı** ${db.has(`cikisM_${message.guild.id}`) ? db.fetch(`cikisM_${message.guild.id}`).replace("{kullanıcı}", "**{kullanıcı}**").replace("{user}", "**{user}**") : `${ka} Ayarlanmamış **${prefix}çıkış-mesaj-ayarla**`}
${y}**Destek kanalı** ${db.has(`destekK_${message.guild.id}`) ? ac + ` ${message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))}` : `${ka} Ayarlanmamış **${prefix}destek-kanal-ayarla**`}
${y}**Destek rolü** ${db.has(`destekR_${message.guild.id}`) ? ac + " `@"+message.guild.roles.get(db.fetch(`destekR_${message.guild.id}`)).name+"`" : `${ka} Ayarlanmamış **${prefix}destek-rol-ayarla**`}

  
`] 
  
  const ayarReis = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(sayfa)
  .setTimestamp()
  message.channel.send(ayarReis)

  
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["settings"],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar',
  };
