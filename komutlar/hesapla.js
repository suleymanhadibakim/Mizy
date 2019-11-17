var math = require('mathjs');

exports.run = (bot, message, args, command) => {
    console.log(`[${message.author.tag}] [${message.author.id}] did command [${command}.js]`)
    let input = args.join(" ");
    if (!input) {
        message.reply('__Hesap makinesinde çözülmesi için bir denklem sağlamalısınız!__');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Geçersiz matematik denklemi:** ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("**Soru:**", question, true)
        .addField("**Cevap:**", answer)

    message.channel.send({
        embed
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
  name: 'hesapla',
  description: 'Matematik İşlemi Yapar.',
  usage: 'hesapla'
};
