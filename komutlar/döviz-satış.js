const tcmb = require('tcmb-exchange-rates');
const Discord = require('discord.js');
exports.run  =  (client, message, args) => {
let mesag = args.join().slice();
  if (mesag.length < 1) return message.channel.send(`Lütfen bir kur kodu giriniz. \nÖrnek Kurlar: **USD**, **EUR**, **GBP**`);
tcmb(`${mesag}`, 'Today', 'BanknoteSelling')
    .then(function(veri) {
   const dövizsatış = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Döviz - Satış")
  .setDescription(`1 ${mesag} = **${veri} TL**`)
  message.channel.send(dövizsatış)
        console.log(veri)
    })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'döviz-satış',
  description: 'Döviz Satışını Gösterir',
  usage: 'döviz-satış'
};