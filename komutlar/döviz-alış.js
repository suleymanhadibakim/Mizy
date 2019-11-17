const tcmb = require('tcmb-exchange-rates');
const Discord = require('discord.js');
exports.run  =  (client, message, args) => {
let mesag = args.join().slice();
  if (mesag.length < 1) return message.channel.send(`Lütfen bir kur kodu giriniz. \nÖrnek Kurlar: **USD**, **EUR**, **GBP**`);
tcmb(`${mesag}`, 'Today', 'BanknoteBuying')
    .then(function(veri) {
  const dövizalış = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Döviz - Alış")
  .setDescription(`1 ${mesag} = **${veri} TL**`)
  message.channel.send(dövizalış)  
        console.log(veri)
    })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
    kategori: "kullanıcı",
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'döviz-alış',
  description: 'Döviz Alışını Gösterir',
  usage: 'döviz-alış'
};