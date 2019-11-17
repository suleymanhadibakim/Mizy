const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
.setColor("#0afff2")  
.addField("**Ekonomi Komutları**", `\ni!meslek: Bir İşte Çalışırsın\ni!hesabım: Bakiyeni Gösterir\ni!günlük: Hergün Para Verir\ni!haraçkes: İstediğin Kullanıcıdan Haraç Kesersin\ni!market: Marketi Görürsün`)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
      kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'ekonomi',
  description: 'Ekonomi komutları gösterir.',
  usage: 'ekonomi [komut]'
};
