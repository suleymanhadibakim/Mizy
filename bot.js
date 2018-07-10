const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply(':star2: Aleyküm Selam Güzel Kardeşim Hoşgeldin :revolving_hearts: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});
client.on('message', msg => {
  if (msg.content.startsWith(prefix + "çekiliş")) {
    msg.channel.send(`Çekilişi Kazanan: ${msg.guild.members.random().displayName}`);
    }
    });
client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters") { // eslint-disable-line no-unused-vars
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Start with the character '!'
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Ters yazılacak yazıyı yazmalısın.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});
client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});
client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "syt")) {//sunucu kurucusuna yazdığınız mesajı gönderir.
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \nŞikayet: ` + mesaj);
    }
    });

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
  client.on("message", message => {
    const dmchannel = client.channels.find("name", "özeligörme");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});
 
client.on("message", msg => {
            const kufur = ["amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "meme"];
            if (kufur.some(word => msg.content.includes(word)) ) {
                msg.delete()
                msg.reply("**Küfür etme ,Kardeşim**")
            }
        });
  client.on("message", message => {
            if (message.content.toLowerCase() === prefix + 'yenile') {
            if (message.author.id !== "374955269190582294") {
              message.reply('sen Kurucu diyilsin');
            } else {
              message.channel.sendMessage('**Yeniden Başlıyorum Bizi Seçtiniz İçin Teşekkürler**').then(msg => {
              console.log(`Yeniden başlıyorum..`);
              process.exit(0);
            })
           }
          }
        });
		client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'tavsiyeni-gönder' || command === 'tavsiye') {
    let str = '<@374955269190582294>';//@silmeyin!
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(` ⚠ tavsiyeni yazmayı unuttun. ⚠ `);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(''));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); 
  member.addRole(joinRole); 

  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});
		
   

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
