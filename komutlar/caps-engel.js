const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
	//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply(`**${prefix}caps-engelle aç** veya **${prefix}cpas-engelle kapat** yazınz `);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**${prefix}caps-engel aç** veya **${prefix}caps-engel kapat** yazınz `)
  
	if (secenekler === "aç" || secenekler === "on") {
    
    var i = db.set(`capsE_${message.guild.id}`, "acik")
    
    
    const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`Caps Lock Engeli Başarıyla açıldı, caps lock engelini kapatmak için **${prefix}cpas-engel kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
		

	};

	if (secenekler === "kapat" || secenekler === "off") {
    
    
    db.delete(`capsE_${message.guild.id}`)
    
		message.channel.send('Büyük harf engelleyici kapatıldı')

    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['büyük-harf-engelle', 'büyükharfengelle', 'caps-engelle', 'capssngelle', 'büyükharf-engel',"caps-engel"],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'büyükharf-engelle',
		description: 'Büyük harf engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'büyükharf-engelle <aç/kapat>',
    
	};