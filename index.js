

/*const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
response.json({"Süreli Bakım":"Kısa Süreliğine Web Panel Bakımdadır"})
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)
if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
*/
const Discord = require('discord.js');
const client = new Discord.Client();
var exec = require('child-process-promise').exec;
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const ms = require("ms")
const ayarlar = require("./ayarlar.json")

const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./müzik');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require('ytdl-core')
const queue = new Map();

const db = require('quick.db');
const Jimp = require('jimp');
const snekfetch = require('snekfetch');

client.setMaxListeners(21)
client.ayar = db;
client.tr = require('./tr.js');
client.en = require('./en.js');



require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");
client.ayarlar = {
        "official_sahip": "244847249866096640",
        "sahip": ["244847249866096640","304640653931970560"],
        "yardimcilar": ["304640653931970560"],
        "isim": "Imam-Bot",
        "botD": "https://discordapp.com/oauth2/authorize?client_id=350576272251813888&scope=bot&permissions=2146958847",
        "webS": "https://imambot.xyz/",
        "web": "https://imambot.xyz/",
        "oynuyor":"i!yardım | https://www.imam-bot.xyz",
        "dblO": "https://discordbots.org/bot/350576272251813888/vote",
        "dbl": "https://discordbots.org/bot/350576272251813888",
        "dbltoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1MDU3NjI3MjI1MTgxMzg4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQzNjk0NzkxfQ.3Ze8wLP7Fr10Gp8Z8QUm0ROMf8n-YF3mWrDpD-daOME",
        "webpanel": "https://imam-bot.xyz/",
        "versiyon": "4.8.0",
        "prefix": "i!",
        "renk":  "DARKBLUE",
        "version":  "4.8.0",
 };

client.emojiler = {
//598430413165166592
   "paraGitti": "598195449186222090",  // X İŞARETİ          
   "paraGitmedi": "598195449538543618", // TİK İŞARETİ      
   "paraROZET": "533265960002650123", // PARA İLE ALINAN YILDIRIM ROZET EMOJİSİ  
   "onayRozet": "527573460814135306" , // ONAY ROZETİ
   "modRozet": "539489890014855178", // MOD ROZETİ
   "yetkiliRozet": "539489890434285568", // YETKİLİ ROZETİ
   "destekçiRozet": "539489889977237530",
   "evet": "525981184568721409",  // TİK İŞARET       
   "hayır": "525981212389670912", // X İŞARETİ        
   "yukleniyor": "536478214013583372", // YÜKLENİYOR EMOJİ İŞTE :D          
   "rahatsızetme": "565951007419531275", // RAHATSIZ ETMEYİN EMOJİSİ    
   "çevrimiçi": "565950889232433162", // ÇEVRİMİÇİ EMOJİSİ  
   "yayıncı": "537015282192089099", // YAYINCI EMOJİSİ 
   "çevrimdışı": "565951225779060746", // ÇEVRİM DIŞI EMOJİSİ  
   "boşta": "565951110636896256", // BOŞTA EMOJİSİ     
   "bot": "528281815249584146", // BOT EMOJİSİ    
   "kalpSarılmalı":"598430413165166592",      
  
  // AYARLAR KOMUDUNDAKİ AÇIK KAPALI EMOJİLERİ
  "kapalıA": "525023787956043776",
  "açıkA": "525023294492114945",
}

client.avatarURL = `https://cdn.discordapp.com/avatars/350576272251813888/748e250f08e416dcb9bc84f394244549.png?size=2048`


const DBL = require("dblapi.js");
const dbl = new DBL(client.ayarlar.dbltoken, client);

/*
client.on('ready', () => {
   setInterval(() => {
        dbl.postStats(client.guilds.size);
  }, 1800);
   });

  dbl.getStats("350576272251813888").then(stats => {
    console.log('DBL ye gerekli verileri girdim.') // {"server_count":2,"shards":[]}
 });

*/

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};
                        
  client.ayar = db;


client.on("ready", async () => {
  exec("rm -rf .git")
  exec("rm -r img")
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("online");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'adamsın imam' || msg.content.toLowerCase() === 'imam adamdır' || msg.content.toLowerCase() === 'imam kıraldır') {
    msg.reply("Eyvallah Bro")
  }
});
//////////////////////////////////////////////



//Kurucu Geldi//
//////////////////////////////////////////////
/*client.on('guildMemberAdd', async member => {
  if (member.id !== ayarlar.sahip && member.id !== ayarlar.sahip) {
  }else{
  member.guild.owner.send({embed:{
  title:"**Merhaba, Ben Imam-Bot Seni Rahatsız ettiğim İçin Üzgünüm Ama Size Bişi Söylicem Kurucum ImamTR Sunucunuza Geldi Kendisi Eğlenceli Birisidir iyi Eğlenceler**",
  color: Math.floor(Math.random() * 16777214) + 1,
  }})
  }
  });*/
//////////////////////////////////////////////

//Onay//
//////////////////////////////////////////////
client.on("message", msg  => {
   let prefix = client.ayarlar.prefix
   if (msg == `${prefix}onay`) {
        if (msg.guild.id != "523156958304534561") return msg.channel.send("Burası Botun Destek Sunucusu Değil\nhttps://discord.gg/E5sDuv")
        let guild = client.guilds.find(g => g.ownerID == msg.author.id)
        if(!guild) return msg.channel.send("❌ Sunucu Bulunamadı Botu Sunucuna eklemelisin.")
        msg.channel.send("🎉 Başarılı Onaylı Kullanıcı Rolün Verildi.")
        client.guilds.get("523156958304534561").member(msg.author.id).addRole(client.guilds.get("523156958304534561").roles.get("612707972304338955"));
    }
})
//////////////////////////////////////////////
//Özel Komut//
//////////////////////////////////////////////
let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));

client.cmdd = komutum


client.on("message",async  message => {

  if (!message.guild) return;
  
let prefix = ayarlar.prefix;

  if(message.content.startsWith(prefix)) {
        let komutum = client.cmdd
        if(komutum[message.guild.id]) {
            for (var i = 0; i < Object.keys(komutum[message.guild.id]).length; i++) {
                if(message.content.slice(prefix.length) === Object.keys(komutum[message.guild.id][i])[0]) {
                   
                    message.channel.send(komutum[message.guild.id][i][Object.keys(komutum[message.guild.id][i])])
                  
                    return
                }
            }
        }
    }
});

//////////////////////////////////////////////


//snipe//
//////////////////////////////////////////////
client.on("messageDelete", message => {
  if(message.author.bot) return;
  db.set(`sonmesajicerik_${message.channel.id}`,message.content)
  db.set(`sonmesajsahipid_${message.channel.id}`,message.author.id)
  console.log('Sunucu:' + message.guild.name + ' Snipe: ' + message.content + ' ' + "Kullanıcı:" + client.users.get(message.author.id).tag)
  });
//////////////////////////////////////////////

//komutlog//
//////////////////////////////////////////////
/*
client.on("message", async message => {
let klog = client.channels.get("536098326949527562")
let guild = message.guild
let user1 = message.author
let kanal = message.channel

let kk = new Discord.RichEmbed()
        .setTitle("Komut Kullanıldı")
        .setDescription(`Komut: **${message.content}**`)
        .addField("Komutu Kullanan", `Kullanıcı Adı: **${user1.tag}**\nKullanıcı ID: **${user1.id}**`, true)
        .addField("Sunucu Bigi", `Sunucu Adı: **${guild.name}**\nSunucu ID: **${guild.id}**`, true)
        .addField("Kanal Bilgi", `Kanal Adı: **${kanal.name}**\nKanal ID: **${kanal.id}**`,true)
        .setColor("BLUE")
        .setTimestamp()
        .setThumbnail(message.author.avatarURL);
     if(message.content.startsWith(prefix)) {  
klog.send(kk)
}
});
*/
//////////////////////////////////////////////


//Owner Mesaj//
//////////////////////////////////////////////
client.on('guildCreate', async guild => {
  const girismesaj = new Discord.RichEmbed()
   .setTitle(`Botumuzu Sunucunuza Eklediğiniz için Teşekkürler`)
   .setColor("ORANGE")
   .setImage(`https://i.postimg.cc/1XvVYhwm/Grand-Heartfelt-Iberianlynx.gif`)
   .setThumbnail("https://cdn.discordapp.com/avatars/350576272251813888/d2f8b62a407f225e0136677e63496ebe.png?size=2048")
   .setDescription("**Imam-Bot** sunucunuza başarıyla eklendi. :white_check_mark: Botumuzun özelliklerini öğrenmek için " + ayarlar.prefix + "yardım yazabilirsiniz. \n \n" + "Sunucumuza Gelerek **Destekçi** Rolü Alabilirsiniz(Destek Sunucumuza i!onay yazmanız yeterli). Sunucumuz:https://imam-bot.xyz/desteksunucu" )
    .addField(" :busts_in_silhouette: " + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + " kullanıcıya hizmet vermekteyim","https://imam-bot.xyz/botuekle")
    .addField(":dizzy: " + client.guilds.size + " Sunucuda Bulunmaktayım", "https://imam-bot.xyz/botuekle")
  guild.owner.send(girismesaj)
});
//////////////////////////////////////////////


//////////////////////////////////////////////
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
//////////////////////////////////////////////







//Bot Koruma//
//////////////////////////////////////////////
/*client.on("guildMemberAdd", async member => {
  let a = db.fetch('botkoruma_' + member.guild.id)
  if(a !== "Aktif") return;
  setTimeout(() => {
   member.guild.fetchMember(member).then(a => {
   a.roles.forEach(function(orospu) {
   if(orospu.name.includes(member.user.username)) {
   member.guild.member(member).kick();
   member.guild.channels.find(x => x.name === "bot-koruma").send('**Sunucuya yönetici bir bot eklendi ve koruma nedeniyle botu banladım.\nBanlanan Bot: **' + member.user.tag)
  }})})
  }, 1000)
})*/

client.on("guildMemberAdd", async member => {
  let a1 = db.fetch('botkoruma_' + member.guild.id)
  let b = db.fetch('botkorumaban_' + member.guild.id)
  let c = db.fetch('botkorumauyarı_' + member.guild.id)
  if(a1 !== "Aktif") return;

   setTimeout(() => {
   member.guild.fetchMember(member).then(a => {
   a.roles.forEach(function(orospu) {
   if(orospu.hasPermission("ADMINISTRATOR") || orospu.hasPermission("BAN_MEMBERS") || orospu.hasPermission("KICK_MEMBERS")) {

   if (b !== "Aktif") client.channels.get(db.fetch('botkuyarı_' + member.guild.id)).send('**Sunucuya yönetici bir bot eklendi .\Eklenen Bot: **' + member.user.tag)
   if (c == "Aktif")  member.guild.owner.send("Sunucuya Yönetici Bir Bot Eklendi \nEklenen Bot:" + member.user.tag)
   if (b == "Aktif") {
   member.guild.member(member).kick();
   client.channels.get(db.fetch('botkuyarı_' + member.guild.id)).send('**Sunucuya yönetici bir bot eklendi ve koruma nedeniyle botu banladım.\nBanlanan Bot: **' + member.user.tag) 
   }
  }})})
  }, 1000)
})
//////////////////////////////////////////////

//Tag Engel//
//////////////////////////////////////////////
client.on('guildMemberAdd', async (member) => {
  const filtre = await db.fetch(`yTaglar_${member.guild.id}`);
  const uyarıkanal = client.channels.get(db.fetch(`ytagKanak_${member.guild.id}`))
  const sistem = await db.fetch(`tTagSistem_${member.guild.id}`);
  //let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  let prefix = "i!"
  if (sistem != "aktif") return;
  
  else {
  const fltr = filtre
  //const fltr = db.get(`yTaglar_${member.guild.id}`)  
 
 if (fltr.some(word => member.user.username.includes(word))) {
    member.guild.ban(member, 2)
    if (db.has(`ytagKanak_${member.guild.id}`) === true) {
    uyarıkanal.send(`\`${member.user.username}\` İsimli Kullanıcı Sunucyua Katıldı Yasaklı Tag Sebebiyle Sunucudan Yasaklandı`)
    }
    if (db.has(`ytagKanak_${member.guild.id}`) === false) {
   member.guild.ban(member, 2)
   member.guild.owner.send(`Hey Sunucunda Yasaklı Tag Uyarı Kanalını Ayarlamamışsın\nAyarlamak İçin ${prefix}yasak-tag-kanal #kanal`) 
    }
   }
  }
});

//////////////////////////////////////////////


//Küfür Reklam Engel//
//////////////////////////////////////////////
client.on("message", async msg => {
  
  
 

  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Imam-Bot Filtre Sistemi")
        .setDescription(`${msg.author  .username} Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
 
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (msg.member.hasPermission("BAN_MEMBERS"))return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden aşırı büyük harf yasak`)
      y.delete(5000);
      return
    };
  };
});
client.on("message", async msg => {
  let i = db.fetch(`reklam_${msg.guild.id}`)
  var embeds = new Discord.RichEmbed()
 .addField("**UYARI**", `**Bu Sunucuda Imam-Bot Reklam Engel aktif Bu Sunucuda Reklam Yapamassın**`)
  if (i == 'acik') {
        
    const reklam = ["discordapp", ".com", ".net", ".xyz", ".tk", "gulu", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ". com", "h t t p s", "h t t p", ". tk", ". net", ". xyz", ". c o m", ". n e t", ". x y z"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS") && msg.author.id !==  "244847249866096640")  {
                  msg.delete();

                  return msg.reply(embeds).then(msg => msg.delete(5000))
             }              
          } catch(err) {
            console.log(err);
          }
        } } else if (i == 'Kapalı') {
 
}
   
});

client.on("message", async msg => {
 let user = msg.author 
 
  let cc = db.fetch(`reklamp_${msg.author.id}_${msg.guild.id}`)
  let i = db.fetch(`reklamban_${msg.guild.id}`)
  var banned = new Discord.RichEmbed()
  .setColor("RED")
  .addField("Banned", `**<@${user.id}> Kullanıcısı 3 Uyarıdan Sonra Reklam Yaptığı İçin Sunucudan Otomatik Olarak Yasaklandı**`)
  if (i == 'Açık') {
        
    const reklam = ["discordapp", ".com", ".net", ".xyz", ".tk", "gulu", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ". com", "h t t p s", "h t t p", ". tk", ". net", ". xyz", ". c o m", ". n e t", ". x y z"];
       if (cc >= 3) {
        msg.channel.send(banned)
        user.send(`\`${msg.guild.name}\` Sunucusunda **3** Kereden Fazla Reklam Yaptığın İçin Sunucudan Yasaklandın`)
        msg.guild.ban(user, 2)
        db.add(`reklamp_${msg.author.id}_${msg.guild.id}`, -3)
       }  
        else

        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS") && msg.author.id !==  "244847249866096640")  {
                  msg.delete()
                  db.add(`reklamp_${msg.author.id}_${msg.guild.id}`, 1);
                  var embeds = new Discord.RichEmbed()
                  .addField("**UYARI**", `**Bu Snucuda Imam-Bot Reklam-Ban Aktif 3 Uyarıda Sunucudan Yasaklanırsın ${cc}/3**`)
                  return msg.channel.send(embeds).then(msg => msg.delete(5000))
             }              
          } catch(err) {
            console.log(err);
          }
        } } else if (i == 'Kapalı') {
 
}
});


client.on("message", async msg => {
  
  
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('**Aleyküm Selam, Hoşgeldin**')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  
    });


client.on("message", msg => {
if(msg.channel.type === "dm") return;
var embeds = new Discord.RichEmbed()
 .addField("**UYARI**", `**Bu Sunucuda Imam-Bot Everyone Engel aktif Bu Sunucuda Everyone Kullanamassın**`)  
let i = db.fetch(`everyone_${msg.guild.id}`)
    if (i == 'acik') {
        const everyone = ["@everyone", "@here",];
        if (everyone.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply(embeds).then(msg => msg.delete(3000));


  msg.delete(3000);

            }
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {

    }
    if (!i) return;
    });


client.on("message", async msg => {
  let i = db.fetch(`kufur_${msg.guild.id}`)
var embeds = new Discord.RichEmbed()
 .addField("**UYARI**", `**Bu Sunucuda Imam-Bot Küfür Engel Aktif Bu Sunucuda Küfür Edemessin**`)
if (i == 'acik') {
        const kufur = ["fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX","amk","aq","sik","siktir","a q","a mk","oç","oruspu","orusbu","sikerler","sikerim","s1kerler","s1kerim","s1ker1m","wtf","AMK","AQ","ORUSBU","ORUSPU","SİKERLER",,"GAY","GÖT","ANAN","PORNHUB.COM","pornhub.com","brazzers","BRAZZERS","ANANI","ananı","ananı sikerim","ananı sik","anamı sik","ANANI SİK","ANANI SİKERİM","şerefsiz","Şerefsiz","ŞEREFSİZ","orospu","orospu çocuğu","OC","Piç","PİÇ","yavşak","YAVŞAK","ibne","ipne","İBNE","İPNE","amına korum","pi.ç","piç"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
if (!msg.member.hasPermission("BAN_MEMBERS") && msg.author.id !==  "244847249866096640")  {
                  msg.delete();

                  return msg.reply(embeds).then(msg => msg.delete(3000));
             }              
          } catch(err) {
            console.log(err);
          }
        } } else if (i == 'Kapalı') {
 
}
});
//////////////////////////////////////////////



//Bot-log//
//////////////////////////////////////////////
client.on("message", message => {
    const dmchannel = client.channels.get("493514148773363756");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}(${message.author.id})`,
            description: `${message.content}`
        }})
    }
});
client.on('guildCreate', async guild => {
   var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
           const kanal = client.channels.get("493514148773363756");

        
        const server = new RichEmbed()
  .setColor('GREEN')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucuya Eklendim!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  kanal.send(server);
})
client.on("guildDelete", async guild => {
  var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
        

         const kanal = client.channels.get("493514148773363756");
           const server = new RichEmbed()
  .setColor('RED')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucudan Atıldım!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  kanal.send(server);
})

//////////////////////////////////////////////


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});



//sayaç//
//////////////////////////////////////////////
client.on("guildMemberAdd", async member => {
    let kanal = db.fetch(`sayacKanal_${member.guild.id}`)
  
    if(db.has(`sayac_${member.guild.id}`) === true) {
        if(db.fetch(`sayac_${member.guild.id}`) <= member.guild.members.size) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Tebrikler ${member.guild.name}!`)
            .setDescription(`Başarıyla \`${db.fetch(`sayacSayi_${member.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            .setColor("RANDOM")
            member.guild.channels.get(kanal).send({embed})
            member.guild.owner.send({embed})
            db.delete(`sayac_${member.guild.id}`)
        }
    }
})


client.on('guildMemberAdd', (member, guild) => {
  let kanal = db.fetch(`sayacKanal_${member.guild.id}`)
  let i = db.fetch(`sayacSayi_${member.guild.id}`)
    if (!i) return
    if (!kanal) return    
    member.guild.channels.get(kanal).send(`:inbox_tray: Yeni bir kişi katıldı! \`${i}\` olmaya \`${i - member.guild.memberCount}\` kişi kaldı!`) 
})
client.on('guildMemberRemove', member => {
  let kanal = db.fetch(`sayacKanal_${member.guild.id}`)
 let i = db.fetch(`sayacSayi_${member.guild.id}`)
    if (!i) return
    if (!kanal) return  
    member.guild.channels.get(kanal).send(`:outbox_tray: Bir kişi kaybettik :frowning: \`${i}\` olmaya \`${i - member.guild.memberCount}\` kişi kaldı!`)
})
//////////////////////////////////////////////

//Giris-çıkış//
//////////////////////////////////////////////
client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)
  
    member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `<@${member.user.id}>`).replace("{user}", `<@${member.user.id}>`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`);
});

client.on("guildMemberRemove", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
  member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `**${member.user.username}**`).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`);
});
//////////////////////////////////////////////

//Güvenlik Sistemi//
//////////////////////////////////////////////
client.on('guildMemberAdd', async (member) => {

  let guild = member.guild
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik_${member.guild.id}`)) 
  let güvenlik = await db.fetch(`guvenliksis_${member.guild.id}`)
  //let kanal = member.guild.channels.find('name', 'güvenlik')
    
  
  if (güvenlik == "acik") {
  if (!kanal) return;
   

  const sistem = new Date().getTime() - user.createdAt.getTime();
  await moment.utc(moment.duration(sistem).asDays()).format("DAY");
  await moment(sistem).format("DAY")

      var acaba = ''
      var on = ''
      if (sistem <= 604800000) {
       var acaba = "Kullanıcı Şüpheli Gözüküyor"
       var on = 0
       }
     else if (sistem > 604800000) {
     var acaba = 'Kullanıcı Güvenilir Gözüküyor!'
     var on = 1
       }
  kanal.send(` \`${member.user.tag}\`Adlı Kullanıcı Sunucuya Katıldı Bu \`${acaba}\``)
  let calistimi = client.channels.get("605668544939687961")
 
    let i = db.fetch(`güvenlikmesaj_${member.guild.id}`)
    if (i == 'acik') {
    let msj = `Az Önce \`${member.guild.name}\` İsimli Sunucuna \`${member.user.tag}\` Adlı Kullanıcı Katıldı \`${acaba}\` `
    let owner = member.guild.owner
    if (on == 0) return owner.send(msj)
    }
    else if (i == 'kapali') {  
    }
    if (!i) return;
  }  
  }); 
//////////////////////////////////////////////

//mod-log//
//////////////////////////////////////////////
client.on('guildBanAdd', async (guild, user) => {
   const embed = new Discord.RichEmbed()
        .setTitle('Üye yasaklandı.')
        .setColor("#36393E")
        .setDescription(`<@${user.id}> adlı kullanıcı yasaklandı!`)
        .setThumbnail(user.avatarURL || user.defaultAvatarURL)
        .setFooter(`Yasaklanan Kullanıcı ID: ${user.id}`)
        .setTimestamp();
            let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embed)
 
               
        })
client.on("guildMemberAdd",async member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  let guild = member.guild
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Sunucuya Bir Kullanıcı Katıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  .setFooter(`Imam-Bot Kullanıcı Log Sistemi | ID: ${member.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embed)
  
})

client.on("guildMemberRemove", async member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
let guild = member.guild
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Sunucudan Bir Kullanıcı Ayrıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setFooter(`Imam-Bot Kullanıcı Log Sistemi | ID: ${member.id}`)
  .setThumbnail(member.user.avatarURL)
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embed)
  
})


.on('messageUpdate', async (oldMessage, newMessage) => {
 if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
  let embedds4 = new Discord.RichEmbed()
        .setColor("#0080ff")
        .setAuthor(`Mesaj Güncellendi!`)
        .setThumbnail(oldMessage.author.avatarURL)
        .addField("Gönderen", oldMessage.author.tag, true)
        .addField("Önceki Mesaj", `\`\`\`${oldMessage.content}\`\`\``, true)
        .addField("Şimdiki Mesaj", `\`\`\`${newMessage.content}\`\`\``, true)
        .addField("Kanal", newMessage.channel.name, true)
        .setFooter(` Imam-Bot Log Sistemi | ID: ${client.user.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${oldMessage.guild.id}`)
    if (!oldMessage.guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else oldMessage.guild.channels.get(membermodChannel).send(embedds4)
})
       
        client.on('guildBanRemove', async (guild, member) => {
  let embedds6 = new Discord.RichEmbed()
        .setColor("#0080ff")
        .setTitle(`Yasak Kaldırıldı!`)
        .setThumbnail(member.avatarURL)
        .setDescription(`'${member.tag}' adlı kişinin yasağı kaldırıldı.`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embedds6)
        })
       





        .on('messageDelete', async msg => {
 
                        var embed = new Discord.RichEmbed()
                        .setAuthor(msg.author.tag, msg.author.avatarURL)
                        .setColor("BLUE")
                        .setDescription(`<@!${msg.author.id}> tarafından <#${msg.channel.id}> kanalına gönderilen \`\`\`${msg.content}\`\`\` mesajı silindi.`)
                        .setFooter(`Imam-Bot Log Sistemi | ID: ${msg.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${msg.guild.id}`)
    if (!msg.guild.channels.get(membermodChannel)) return console.log('Mesaj Silindi')
    else msg.guild.channels.get(membermodChannel).send(embed)          
               
        })
.on('roleUpdate', async (oldRole, newRole) => {  
let membermodChannel = await db.fetch(`membermodChannel_${newRole.guild.id}`)  

let isimgg = new Discord.RichEmbed()
.setTitle("Bir Rol Güncellendi")
.setColor("BLUE")
.addField("Eski İsim", `\`${oldRole.name}\``)
.addField("Yeni İsim", `\`${newRole.name}\``)

let renkgg = new Discord.RichEmbed()
.setTitle("Bir Rol Güncellendi")
.setColor("BLUE")
.addField("Eski Renk", `\`${oldRole.hexColor}\``)
.addField("Yeni Renk", `\`${newRole.hexColor}\``)

let permgg = new Discord.RichEmbed()
.setTitle("Bir Rol Güncellendi")
.setColor("BLUE")
.setDescription(`Güncellenen Rol: **${newRole.name}**`)
  

if (oldRole.name == "@everyone") return;

else {

if(oldRole.name !== newRole.name){
    if (!newRole.guild.channels.get(membermodChannel)) return //console.log('Mesaj Silindi')
    else newRole.guild.channels.get(membermodChannel).send(isimgg) 
}
  else if (oldRole.hexColor !== newRole.hexColor) {
   if (!newRole.guild.channels.get(membermodChannel)) return //console.log('Mesaj Silindi')
    else newRole.guild.channels.get(membermodChannel).send(renkgg)
}
else {
  if (oldRole.name == newRole.name) return;
  if (!newRole.guild.channels.get(membermodChannel)) return //console.log('Mesaj Silindi')
  else newRole.guild.channels.get(membermodChannel).send(permgg)
};
};
})


.on('roleDelete', async role => {
  const fs = require('fs');
  let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(`Rol Silindi!`)
        .setDescription(`'${role.name}' adlı rol silindi.`, true)
  .setFooter(`Imam-Bot Log Sistemi | ID: ${role.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${role.guild.id}`)
    if (!role.guild.channels.get(membermodChannel)) return console.log('Mesaj Silindi')
    else role.guild.channels.get(membermodChannel).send(embed)    
})
.on('roleCreate', async role => {
  const fs = require('fs');
  let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(`Rol Oluşturuldu!`)
        .setDescription(`'${role.name}' adlı rol oluşturuldu.`, true)
  .setFooter(`Imam-Bot Log Sistemi | ID: ${role.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${role.guild.id}`)
    if (!role.guild.channels.get(membermodChannel)) return console.log('Mesaj Silindi')
    else role.guild.channels.get(membermodChannel).send(embed)    
})
.on('emojiCreate', async emoji => {
  const fs = require('fs');
  let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(`Emoji Oluşturuldu!`)
        .setDescription(`<:${emoji.name}:${emoji.id}> - ${emoji.name} adlı emoji oluşturuldu!`, true)
  .setFooter(`Imam-Bot Log Sistemi | ID: ${emoji.id}`)
                                 let membermodChannel = await db.fetch(`membermodChannel_${emoji.guild.id}`)
    if (!emoji.guild.channels.get(membermodChannel)) return console.log('Yazı Kanal Oluşturuldu')
    else emoji.guild.channels.get(membermodChannel).send(embed) 
})

.on('emojiUpdate', async (oldEmoji, newEmoji) => {


    let embed = new Discord.RichEmbed()
                    .addField(`Emoji güncellendi`, `► Eski ismi: \`${oldEmoji.name}\`\n► Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("BLUE")
                    .setFooter(`Imam-Bot Log Sistemi | ID: ${oldEmoji.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${oldEmoji.guild.id}`)
    if (!oldEmoji.guild.channels.get(membermodChannel)) return console.log('Yazı Kanal Oluşturuldu')
    else oldEmoji.guild.channels.get(membermodChannel).send(embed)         

    })

.on('emojiDelete', async emoji => {
  const fs = require('fs');

  let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(`Emoji Silindi!`)
        .setDescription(`':${emoji.name}:' adlı emoji silindi!`, true)
  	.setFooter(`Imam-Bot Log Sistemi | ID: ${emoji.id}`)
                                 let membermodChannel = await db.fetch(`membermodChannel_${emoji.guild.id}`)
    if (!emoji.guild.channels.get(membermodChannel)) return console.log('Yazı Kanal Oluşturuldu')
    else emoji.guild.channels.get(membermodChannel).send(embed)                      
  })
        .on('channelCreate', async channel => {
 
               
                        if (channel.type === "text") {
                                var embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
                                .setFooter(`Imam-Bot Log Sistemi | ID: ${channel.id}`)
                                 let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Yazı Kanal Oluşturuldu')
    else channel.guild.channels.get(membermodChannel).send(embed)                      
                        };
                        if (channel.type === "voice") {
                                var embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
                                .setFooter(`Imam-Bot Log Sistemi | ID: ${channel.id}`)
         let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Ses Kanalı Oluşturuldu')
    else channel.guild.channels.get(membermodChannel).send(embed)                       }
                        })
               
        .on('channelDelete', async channel => {
 if (channel.type === "text") {
                                let embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
                                .setFooter(`Imam-Bot' Log Sistemi | ID: ${channel.id}`)
         let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Yazı Kanalı Silindi')
    else channel.guild.channels.get(membermodChannel).send(embed)
                        };
                        if (channel.type === "voice") {
                                let embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
                                .setFooter(`Imam-Bot Log Sistemi | ID: ${channel.id}`)
 let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Ses Kanalı Silindi')
    else channel.guild.channels.get(membermodChannel).send(embed)                       }
               
        })

client.on('guildMemberUpdate', async(oldMember, newMember) => {
   let kanal = await db.fetch(`membermodChannel_${oldMember.guild.id}`)
   let guild = oldMember.guild
 

 const nickgg = new Discord.RichEmbed()
.setTitle(`${oldMember.user.username} Kullanıcısı Güncellendi`)
.setDescription("Kullanıcı Adı Değiştirildi")
.setColor("BLUE")
.addField("Eski İsim", `\`\`\`${oldMember.nickname}\`\`\``)
.addField("Yeni İsim", `\`\`\`${newMember.nickname}\`\`\``)
  
  const rolgg = new Discord.RichEmbed()
.setTitle(`${oldMember.user.username} Kullanıcısı Güncellendi`)
.setDescription("Kullanıcı Roleri Güncellendi")
.setColor("BLUE")
.addField("Eski Rolleri", oldMember.roles.map(roles => `${roles.name}`), true)
.addField("Yeni Rolleri", newMember.roles.map(roles => `${roles.name}`), true)
.addField("Eski Yüksek Rol", oldMember.highestRole)
.addField("Yeni Yüksek Rol", newMember.highestRole)
  const rolggg = new Discord.RichEmbed()
.setTitle(`${oldMember.user.username} Kullanıcısının Rolleri Güncellendi`)

   if (oldMember.nickname !== newMember.nickname) {
   guild.channels.get(kanal)
   if (!guild.channels.get(kanal)) return console.log('membermodChannel')
   else guild.channels.get(kanal).send(nickgg)
   }
   else if (oldMember.roles !== newMember.roles) {
        guild.channels.get(kanal)
   if (!guild.channels.get(kanal)) return console.log('membermodChannel')
   else guild.channels.get(kanal).send(rolggg)
   }
 else return;
})
client.on('guildUpdate', async(oldGuild, newGuild) => {
   let kanal = await db.fetch(`membermodChannel_${oldGuild.id}`)
        
  var ngüven = ''
if(newGuild.verificationLevel == 0) {
            var ngüven = '0 Güvenlik Yok'
        }
if(newGuild.verificationLevel == 1) {
            var ngüven = '1 Discord Hesabı Mail İle Doğrulanmalı'
        }
if(newGuild.verificationLevel == 2) {
            var ngüven = '2 Sunucuda 5 Dakika Bulunması Gerek'
        }
if(newGuild.verificationLevel == 3) {
            var ngüven = '(╯°□°）╯︵ ┻━┻:3 Sunucuda 10 Dakika Bulunması Gerek'
        }
if(newGuild.verificationLevel == 4) {
            var ngüven = '┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻ 4 Telefon İle Doğrulanmalı'
        }
  var ogüven = ''
if(oldGuild.verificationLevel == 0) {
            var ogüven = '0 Güvenlik Yok'
        }
if(oldGuild.verificationLevel == 1) {
            var ogüven = '1 Discord Hesabı Mail İle Doğrulanmalı'
        }
if(oldGuild.verificationLevel == 2) {
            var ogüven = '2 Sunucuda 5 Dakika Bulunması Gerek'
        }
if(oldGuild.verificationLevel == 3) {
            var ogüven = '(╯°□°）╯︵ ┻━┻: 3 Sunucuda 10 Dakika Bulunması Gerek'
        }
if(oldGuild.verificationLevel == 4) {
            var ogüven = '┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻ 4 Telefon İle Doğrulanmalı'
        }

//┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻
const yergg = new Discord.RichEmbed()
 .setTitle("Sunucu Güncellendi")
 .setColor("BLUE")
 .addField("Eski Bölge", `${oldGuild.region}`)
 .addField("Yeni Bölge", `${newGuild.region}`)
 const isimgg = new Discord.RichEmbed()
 .setTitle("Sunucu Güncellendi")
 .setColor("BLUE")
 .addField("Eski İsim", `${oldGuild.name}`)
 .addField("Yeni İsim", `${newGuild.name}`)
 const güvengg = new Discord.RichEmbed()
 .setTitle("Sunucu Güncellendi")
 .setColor("BLUE")
 .addField("Eski Güvenlik Seviyesi", `${ogüven}`)
 .addField("Yeni Güvenlik Seviyesi", `${ngüven}`)
 const afkgg = new Discord.RichEmbed()
 .setTitle("Sunucu Güncellendi")
 .setColor("BLUE")
 .addField("Eski AFK Kanal", `${oldGuild.afkChannel.name}`)
 .addField("Yeni AFK Kanalı", `${newGuild.afkChannel.name}`)
 const ownergg = new Discord.RichEmbed()
 .setTitle("Sunucu Sahipliği Aktarıldı")
 .setColor("BLUE")
 .addField("Eski Sahip", `<@${oldGuild.owner.id}>`)
 .addField("Yeni Sahip", `<@${newGuild.owner.id}>`)
 const resimgg = new Discord.RichEmbed()
 .setTitle("Sunucu Resmi Değiştirildi")
 .setColor("BLUE")
 .setDescription("Sunucunun Resimi Güncellendi")
 const sunucugg = new Discord.RichEmbed()
 .setTitle("Sunucu Güncellendi")
 .setColor("BLUE")
 .setDescription("Sunucu Güncellendi")

if (oldGuild.region != newGuild.region) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(yergg)
}
else if (oldGuild.name != newGuild.name) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(isimgg)
}
else if (oldGuild.verificationLevel != newGuild.verificationLevel) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(güvengg)
}
else if (oldGuild.afkChannel != newGuild.afkChannel) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(afkgg)
}
else if (oldGuild.owner != newGuild.owner) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(ownergg)
}
else if (oldGuild.icon != newGuild.icon) {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(resimgg)
}
else {
  if (!oldGuild.channels.get(kanal)) return 
  else oldGuild.channels.get(kanal).send(sunucugg)
}
});
//////////////////////////////////////////////

//////////////////////////////////////////////
client.on("guildMemberAdd", async member => {
         let anan = member.user.avatarURL || member.user.defaultAvatarURL
    let giriş = await db.fetch(`giriş_${member.guild.id}`)
    if (!member.guild.channels.get(giriş)) return console.log('Kullanıcı Giriş Yaptı')
        let username = member.user.username;
        if (member.guild.channels.get(giriş) === undefined || member.guild.channels.get(giriş) === null) return;
        if (member.guild.channels.get(giriş).type === "text") {
             const bg = await Jimp.read("https://cdn.discordapp.com/attachments/321646765180715008/520209658204651520/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    member.guild.channels.get(giriş).send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
        }
    })
client.on("guildMemberRemove", async member => {
         let anan = member.user.avatarURL || member.user.defaultAvatarURL
    let giriş = await db.fetch(`giriş_${member.guild.id}`)
    if (!member.guild.channels.get(giriş)) return console.log('Kıllanıcı Çıkış Yaptı')
        let username = member.user.username;
        if (member.guild.channels.get(giriş) === undefined || member.guild.channels.get(giriş) === null) return;
        if (member.guild.channels.get(giriş).type === "text") {
           const bg = await Jimp.read("https://cdn.discordapp.com/attachments/321646765180715008/520209659785773056/guildRemove.png");
           const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    member.guild.channels.get(giriş).send(new Discord.Attachment("./img/"+ member.id + ".png"));
              }, 1000);
        }
    })
//////////////////////////////////////////////



// Profil Level
//////////////////////////////////////////////
client.on("message", async message => {
      var user = message.mentions.users.first() || message.author;
      const args = message.content.substring(prefix.length).split(" ");
      const command = args.shift().toLowerCase();
 if (command === "rozetler" || command === "rozet" || command === "badge" || command === "badges" || command === "rozetlerim") {
const anembeds2 = new Discord.RichEmbed()
.setTitle(`${message.author.tag} Adlı Kullanıcının Rozet Kartı:`)
.addField("Onay Rozeti:",`<:imamonayli:548939927203872769>`, true)
.addField("Ekip Rozeti:",`<:imamcrown:565952384799342613>`, true)
.addField("Destekçi Rozeti:", `<:imamdestekci:548939927308599315>`, true)
.addField("Moderatör Rozeti",`<:imammod:548939926641836060>`, true)
.setColor("#ffff00")
.setFooter(``).
setThumbnail(user.avatarURL)
      message.channel.send(anembeds2)
    }
})

  client.on("message", async msg => {
  
  const request = require('node-superfetch');
  const db = require('quick.db');
  
    
    

    
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    msg.channel.send(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
});


//afk sistemi//
//////////////////////////////////////////////
client.on("message", async message => {
    let prefixyeni = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(prefixyeni+"afk")) return;
  if (message.author.bot === true) return;
    if(message.content.includes(`<@${afk_kullanici.id}>`))
        if(db.has(`afks_${afk_kullanici.id}`)) {
                message.channel.send(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
        }
  
        if(db.has(`afks_${message.author.id}`)) {
                message.reply("Başarıyla AFK modundan çıktın!")
            db.delete(`afks_${message.author.id}`)
        }
  
});
//////////////////////////////////////////////




//Panelkur//
//////////////////////////////////////////////
client.on('guildMemberAdd' , async member => {
const toplamkullanıcı = await db.fetch(`toplamkullanıcı_${member.guild.id}`)
const toplamkişi = await db.fetch(`toplamkişi_${member.guild.id}`)
const toplambot = await db.fetch(`toplambot_${member.guild.id}`)
const banlı = await db.fetch(`banlı_${member.guild.id}`)
member.guild.channels.get(toplamkullanıcı).setName(`Toplam Kullanıcı Sayısı: ${member.guild.memberCount}`);
member.guild.channels.get(toplamkişi).setName(`Toplam Kişi Sayısı: ${member.guild.members.filter(m => !m.user.bot).size}`);
member.guild.channels.get(toplambot).setName(`Toplam Bot Sayısı: ${member.guild.members.filter(m => m.user.bot).size}`);
member.guild.fetchBans().then(bans => member.guild.channels.get(banlı).setName(`Toplam Banlı Kişi Sayısı: ${bans.size}`))
});

client.on('guildMemberRemove' ,async member => {
const toplamkullanıcı = await db.fetch(`toplamkullanıcı_${member.guild.id}`)
const toplamkişi = await db.fetch(`toplamkişi_${member.guild.id}`)
const toplambot = await db.fetch(`toplambot_${member.guild.id}`)
const banlı = await db.fetch(`banlı_${member.guild.id}`)
member.guild.channels.get(toplamkullanıcı).setName(`Toplam Kullanıcı Sayısı: ${member.guild.memberCount}`);
member.guild.channels.get(toplamkişi).setName(`Toplam Kişi Sayısı: ${member.guild.members.filter(m => !m.user.bot).size}`);
member.guild.channels.get(toplambot).setName(`Toplam Bot Sayısı: ${member.guild.members.filter(m => m.user.bot).size}`);
member.guild.fetchBans().then(bans => member.guild.channels.get(banlı).setName(`Toplam Banlı Kişi Sayısı: ${bans.size}`))
});

client.on('guildBanAdd', async member => {
const toplamkullanıcı = await db.fetch(`toplamkullanıcı_${member.guild.id}`)
const toplamkişi = await db.fetch(`toplamkişi_${member.guild.id}`)
const toplambot = await db.fetch(`toplambot_${member.guild.id}`)
const banlı = await db.fetch(`banlı_${member.guild.id}`)
member.guild.channels.get(toplamkullanıcı).setName(`Toplam Kullanıcı Sayısı: ${member.guild.memberCount}`);
member.guild.channels.get(toplamkişi).setName(`Toplam Kişi Sayısı: ${member.guild.members.filter(m => !m.user.bot).size}`);
member.guild.channels.get(toplambot).setName(`Toplam Bot Sayısı: ${member.guild.members.filter(m => m.user.bot).size}`);
member.guild.fetchBans().then(bans => member.guild.channels.get(banlı).setName(`Toplam Banlı Kişi Sayısı: ${bans.size}`))
});
	
client.on('guildBanRemove', async member => {
const toplamkullanıcı = await db.fetch(`toplamkullanıcı_${member.guild.id}`)
const toplamkişi = await db.fetch(`toplamkişi_${member.guild.id}`)
const toplambot = await db.fetch(`toplambot_${member.guild.id}`)
const banlı = await db.fetch(`banlı_${member.guild.id}`)
member.guild.channels.get(toplamkullanıcı).setName(`Toplam Kullanıcı Sayısı: ${member.guild.memberCount}`);
member.guild.channels.get(toplamkişi).setName(`Toplam Kişi Sayısı: ${member.guild.members.filter(m => !m.user.bot).size}`);
member.guild.channels.get(toplambot).setName(`Toplam Bot Sayısı: ${member.guild.members.filter(m => m.user.bot).size}`);
member.guild.fetchBans().then(bans => member.guild.channels.get(banlı).setName(`Toplam Banlı Kişi Sayısı: ${bans.size}`))
});
//////////////////////////////////////////////

//DavetTakip//
//////////////////////////////////////////////
const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının \`${invite.code}\` linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});


//////////////////////////////////////////////

//Destek Sistemi//
//////////////////////////////////////////////
client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  
  if(!msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`))) return
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
        var k = 'support-channel'
    }
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    /*if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});*/
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.username}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }
    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.username}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
      .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.username}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
     .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
    if(!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return

  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Destek Talebi Kapatma İşlemi!`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  

  
  //if (!message.guild) return;
  
 // let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  

  // const dil = s
  
  
  
});
//////////////////////////////////////////////

//Davet Sistem//
//////////////////////////////////////////////
client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının ${invite.code} linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});
//////////////////////////////////////////////

//Müzik Sistemi//
//////////////////////////////////////////////
client.on("message", async message => {
if (message.author.bot) return;
 var prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
    case "çal":
    if(!searchString) return message.channel.send(":x: | Bir Şarkı Girmelisin")
    var voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`:x: | Lütfen herhangi bir sesli kanala katılınız.`);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send(`:x: | Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`);
    if (!permissions.has('SPEAK')) return message.channel.send(`:x: | Sunucuda Konuşma Yetkim Yok`)
    
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      return message.channel.send(`▶ **${playlist.title}** İsimli şarkı oynatma listesine Eklendi.`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var index = 0;
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**Şarkı Seç**`)
          .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')} \n\n**Lütfen hangi şarkıyı seçmek istiyorsan başındaki sayı numarasını yaz.**`)
          .setFooter(`Şarkı seçimi "10" saniye içinde iptal edilecektir.`)
          message.channel.send({embed})
          try { 
            var number = [1,2,3,4,5,6,7,8,9,10] 
             const filter = res => {
                        const value = res.content.toLowerCase();
                        return res.author.id === message.author.id && !number.some(word => message.content.includes(word))
                };
            var response = await message.channel.awaitMessages(filter,{
              maxMatches: 1,
              time: 10000,
              errors: ['time']
            });
          } catch (err) {
            console.error(err);
            return message.channel.send(`:x: | Açmam Gereken Şarkının Numarasını Girmediniz.`);
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return message.channel.send(`Youtube üzerinde bu isimde bir şarkı bulunamadı`);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
break;
      case "geç":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    serverQueue.connection.dispatcher.end('g');
    message.channel.send(`:white_check_mark: | Şarkı başarıyla geçildi.`)
    return undefined;

break;
    case "kapat":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('d');
    message.channel.send(`:white_check_mark: | Şarkı kapatıldı, oynatma listesi temizlendi.`)
    return undefined;
break;
      case "ses":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);  
    var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100] 
    if (args[1] && !number.some(word => message.content.includes(word))) return message.channel.send(`:x: | Ayarlayacağınız Ses Seiyesi 0-100 arasında olmak zorundadır`);  
    if (!args[1]) return message.channel.send(`Şuanki Ses Seviyesi: **%${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send(`Ses seviyesi en fazla 100 olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 20);
    return message.channel.send(`Ayarlanan Ses Seviyesi: **%${args[1]}**`);
break;
    case "oynatılan":
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
		return message.channel.send(new Discord.RichEmbed()
    .setTitle("Şu Anda Çalan Şarkı")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`));
break;
      case "kuyruk":
      var siralama = 0;
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    const songList10 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`🎶 | Şuanda Oynatılan`, `${serverQueue.songs[0].title}`)
    .addField(`▶ | Şarkı Kuyruğu`, `${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)

    return message.channel.send(songList10);
break;
case "durdur":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
      return message.channel.send(`:white_check_mark: | Şarkı başarıyla duraklatıldı.`);
    }
    return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
break;
      case "devam":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
      return message.channel.send(`:white_check_mark: | Şarkı başarıyla devam ettiriliyor...`);
    }
    return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 25,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;
    return message.channel.send(`**${song.title}** adlı şarkı kuyruğa eklendi.`);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

if(serverQueue.end) return 
    
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
    if(reason !== "d" && reason !== "g") {
    message.channel.send(':white_check_mark: | Çalınan Şarkı Sona Erdi!')
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    }
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
  
  })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 25);
  
	 serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()                                   
  .setTitle("**Imam-Bot | 🎙 Müzik Başladı**",`https://cdn.discordapp.com/avatars/374282596714020865/726b438f8ca1f15c2e6e892b97c1ae8a.png?size=512`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('RANDOM'));
}
})
//////////////////////////////////////////////


client.login(process.env.TOKEN);  