const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require('ms');

const moment = require("moment");

exports.run = async (client, message, params) => {
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
    const kisi = message.author;
	  moment.locale("tr"); 
  	const amation = moment.utc(kisi.joinedAt).format("LLLL");
    const ambtition = moment.utc(kisi.createdAt).format("LLLL");


        if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()  
      .setDescription("**Kullanıcı İstatistikleri**")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("**Kullanıcı Adı**", message.member.displayName, true)
  .addField("**Etiket**", "#" + message.author.discriminator, true)
  .addField("**ID**", message.author.id, true)
  .addField("**Bot**", `${message.author.bot ? "Evet" : "Hayır"}`, true)
	.addField("**Rolleri**", member.roles.map(roles => `<@&${roles.id}>`).join(', '), true)
  .addField("**Yüksek Rol**", member.highestRole, true) 
  .addField("**Durum**", durm, true)
  .addField("**Oynuyor**", `${message.member.presence.game ? `${message.member.presence.game.name}` : "Not playing anything."}`)
  .addField("**Hesap Ne Zaman Açılmış**", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})`)
  .addField("**Ne Zaman Katılmış**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);

      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim', "ui"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'kullanıcıbilgim'
};