const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** İznin Olması Gerek");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
     message.guild.owner.send('Sunucu Kurulumu Başladı')
         message.guild.channels.forEach(function(kan) {
         message.guild.roles.forEach(function(rol) {
                   kan.delete()
                   rol.delete()
         })}) 


    message.guild.createRole({
        name: `💾 | Kurucu`,
        color: "RED", 
        hoist: true,
    }).then(kurucurol => {
        message.guild.createRole({
        name: `🔑`,
        color: "RED", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    }).then(anahtar => {
    message.guild.createRole({
        name: `🚨 | Admin`,
        color: "ORANGE",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS", 
            "BAN_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: `🛠 | Moderatör`,
        color: "#f1c40f" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `Destek Ekibi`,
        color: '#f1c40f',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: `❤️ | Özel Kişi`,
        color: "#ee77ff" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `👥 | Partner`,
        color: "GREEN" 
        }).then(partnerrol => {
    message.guild.createRole({
        hoist: true,
        name: `🌐 | Bot`,
        color: "PURPLE" 
        }).then(botrol => {
    message.guild.createRole({
        hoist: true,
        name: `👥 | Üye`,
        color: "#00fff5" 
        }).then(üyerol => {
      
      
    })})})})})})})})}) //Roller

     message.guild.createChannel(`Önemli Kanallar`, "Category").then(duyurukategorisi => {
     message.guild.createChannel(`Sohbet Kanalları`, "Category").then(sohbetkategori => {
     message.guild.createChannel(`Ses Kanalları`, "Category").then(SesKategori => {
     message.guild.createChannel(`[A]way [F]rom [K]eyboard`, "Category").then(AFKkategori => {  
     message.guild.createChannel(`Oyunlar `, "Category").then(OyunKategori => {
     message.guild.createChannel(`Moderasyon`, "Category").then(YetkiliKategori => {
     message.guild.createChannel(`Yetkili`, "Category").then(YetkiliKategori1 => {    

 

     message.guild.createChannel(`Kurallar`, "text").then(kuralkanal => {
     message.guild.createChannel(`Duyurular`, "text").then(duyurukanal => {
     message.guild.createChannel(`Partnerler`, "text").then(partnerkanal => {
     message.guild.createChannel(`Partner-Şartları`, "text").then(partnersartkanal => {
     


     message.guild.createChannel(`yetkili-sohbet`, "text").then(YetkiliYazılı => {
     message.guild.createChannel(`Yetkili Sohbet`, "voice").then(YetkiliSesli => {
     message.guild.createChannel(`Yekili-Bot-Komut`, "text").then(Yetkilibot => {



     message.guild.createChannel(`Sohbet`, "text").then(sohbetkanal => {
     message.guild.createChannel(`Bot-Komut`, "text").then(botkomutkanal => {
     message.guild.createChannel(`Medya`, "text").then(medyakanal => {



     message.guild.createChannel(`mod-log`, "text").then(kayıtlar => {
     message.guild.createChannel(`giriş-çıkış`, "text").then(girişçıkış => { 
     message.guild.createChannel(`sayaç`, "text").then(sayaçkanal => { 
     message.guild.createChannel(`otorol`, "text").then(otorolkanal => { 
     
       
     message.guild.createChannel(`AFK`, "voice").then(afkkanal => { 
     
       
     message.guild.createChannel(`Sesli Sohbet 1`, "voice").then(ses1kanal => {
     message.guild.createChannel(`Sesli Sohbet 2`, "voice").then(ses2kanal => {
     message.guild.createChannel(`Sesli Sohbet 3`, "voice").then(ses3kanal => {
     message.guild.createChannel(`Müzik 1`, "voice").then(müzik1kanal => { 
     message.guild.createChannel(`Müzik 2`, "voice").then(müzik2kanal => { 
    


     message.guild.createChannel(`Rainbow Six 1`, "voice").then(rainbow1 => { 
     message.guild.createChannel(`Rainbow Six 2`, "voice").then(rainbow2 => { 
     message.guild.createChannel(`Rainbow Six 3`, "voice").then(rainbow3 => { 
     message.guild.createChannel(`CS:GO 1`, "voice").then(csgo1 => { 
     message.guild.createChannel(`CS:GO 2`, "voice").then(csgo2 => { 
     message.guild.createChannel(`CS:GO 3`, "voice").then(csgo3 => { 
     message.guild.createChannel(`Fortnite 1`, "voice").then(fort1 => { 
     message.guild.createChannel(`Fortnite 2`, "voice").then(fort2 => { 
     message.guild.createChannel(`Fortnite 3`, "voice").then(fort3 => {
     message.guild.createChannel(`PUBG Squad 1`, "voice").then(squad1 => {
     message.guild.createChannel(`PUBG Squad 2`, "voice").then(squad2 => {
     message.guild.createChannel(`PUBG Duo 1`, "voice").then(duo1 => {
     message.guild.createChannel(`PUBG Duo 2`, "voice").then(duo2 => {


      let role4 = message.guild.roles.find("name", "🛠 | Moderatör");
      let role3 = message.guild.roles.find("name", "🚨 | Admin");
      let role1 = message.guild.roles.find("name", "💾 | Kurucu`");
      let role2 = message.guild.roles.find("name", "@everyone");

      YetkiliKategori.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliKategori.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      YetkiliKategori1.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliKategori1.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori1.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori1.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      //////////////////////////////////////////////////////////////////////////////


      kayıtlar.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      kayıtlar.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      sayaçkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      sayaçkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      girişçıkış.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      girişçıkış.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////      
      
       Yetkilibot.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      Yetkilibot.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      Yetkilibot.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      Yetkilibot.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////  
      
       YetkiliSesli.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliSesli.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliSesli.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliSesli.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////    
      
       YetkiliYazılı.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliYazılı.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliYazılı.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliYazılı.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
////////////////////////////////////////////////////////////////////////////// 
   
duyurukategorisi.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      duyurukanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      //////////////////////////////////////////////////////////////////////////////      
      
      partnerkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
          
      kuralkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////      
      
     otorolkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      otorolkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      otorolkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////  
      
      partnersartkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
    
      kuralkanal.setParent(duyurukategorisi)
      duyurukanal.setParent(duyurukategorisi)
      partnerkanal.setParent(duyurukategorisi)
      partnersartkanal.setParent(duyurukategorisi)
      
       
       
       
      sohbetkanal.setParent(sohbetkategori)
      botkomutkanal.setParent(sohbetkategori)
      medyakanal.setParent(sohbetkategori)
      
       
      müzik2kanal.setParent(SesKategori)
      müzik1kanal.setParent(SesKategori)
      ses1kanal.setParent(SesKategori)
      ses2kanal.setParent(SesKategori)
      ses3kanal.setParent(SesKategori)

     
      kayıtlar.setParent(YetkiliKategori)
      girişçıkış.setParent(YetkiliKategori)
      sayaçkanal.setParent(YetkiliKategori)
      otorolkanal.setParent(YetkiliKategori)
     

      afkkanal.setParent(AFKkategori)

      rainbow1.setParent(OyunKategori)
      rainbow2.setParent(OyunKategori)
      rainbow3.setParent(OyunKategori)
      csgo1.setParent(OyunKategori)
      csgo2.setParent(OyunKategori)
      csgo3.setParent(OyunKategori)
      fort1.setParent(OyunKategori)
      fort2.setParent(OyunKategori)
      fort3.setParent(OyunKategori)
      squad1.setParent(OyunKategori)
      squad2.setParent(OyunKategori)
      duo1.setParent(OyunKategori)
      duo2.setParent(OyunKategori)
 

     YetkiliYazılı.setParent(YetkiliKategori1)
     YetkiliSesli.setParent(YetkiliKategori1)
     Yetkilibot.setParent(YetkiliKategori1)


     
      kuralkanal.send(`:tools: | <@${message.guild.owner.id}> bu kanala sunucunuzun kurallarını yazınız!`)
      partnersartkanal.send(`:tools: | <@${message.guild.owner.id}> bu kanala sunucunuzun partnerlik şartlarını yazınız!`)
      kayıtlar.send(`:tools: | <@${message.guild.owner.id}> bu kanalı **i!modlog** <#${kayıtlar.id}> Yazarak Aktif Edebilirsiniz`)
      sayaçkanal.send(`:tools: | <@${message.guild.owner.id}> bu kanalı \n**i!sayaç-ayarla** 100 <#${sayaçkanal.id}>\n Yazarak Aktif Edebilirsiniz`)
      message.guild.owner.send(":white_check_mark: | Sunucu Kurulum Sona Erdi\nKurulum tamamlandıktan sonra mobil kullanıcısı iseniz Discord'a tekrar girmeniz önerilir.")
     
   sohbetkanal.send("Gerekli Odaları Oluşturdum")     
   })})})})})})}) //Kategoriler
   })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})//Kanallar

    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "moderasyon",
  permLevel: "özel"
};

exports.help = {
  name: 'hazır-sunucu',
  description: "Hazır sunucu Kurar (TümKanal Ve Rolleri Siler)",
  usage: 'hazır-sunucu'
};