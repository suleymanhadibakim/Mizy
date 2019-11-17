    
const discord = require('discord.js');
const snek = require('snekfetch');
const twemoji = require('twemoji');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`**Bir Emoji Etiketlemelisin** \`i!jumbo :emoji:\``)
    try {
        const emote = discord.Util.parseEmoji(args[0]);
        if (emote.animated === true) {
          const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
          const { body: buffer } = await snek.get(`${URL}`);
          const toSend = fs.writeFileSync('emote.gif', buffer);
          message.channel.send({ file: 'emote.gif' });
        } else if (emote.id === null) {
          const twemote = twemoji.parse(args[0]);
          const regex = /src="(.+)"/g;
          const regTwemote = regex.exec(twemote)[1];
          const { body: buffer } = await snek.get(`${regTwemote}`);
          const toSend = fs.writeFileSync('emote.png', buffer);
          await message.channel.send({ file: 'emote.png' });
        } else {
          const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
          const { body: buffer } = await snek.get(`${URL}`);
          const toSend = fs.writeFileSync('emote.png', buffer);
          message.channel.send({ file: 'emote.png' });
        }
      } catch (error) {
        if (error.message === 'TypeError: Cannot read property \'1\' of null') {
          message.reply('Bir Hata Meydana Geldi Lütfen i!bugreport kodu ile bu harayı belirtin');
        }
      }
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["jumboemoji"],
   kategori: "sunucu",
    permLevel: 0,
}

exports.help = {
    name: 'jumbo',
    description: 'Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.',
    usage: 'jumbo',
}