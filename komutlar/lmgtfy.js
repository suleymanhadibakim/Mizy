
const encode = require('strict-uri-encode');
 
exports.run = (client, message, args, tools) => {
 
  let question = encode(args.join(' ')); 

  if (!question) return message.channel.send("Bir Soru Gir")

  let link = `https://www.lmgtfy.com/?q=${question}`; 
 
 
  message.channel.send(`**<${link}>**`); 
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
   kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'lmgtfy',
  description: 'küfürengel',
  usage: 'lmgtfy'
};