const ytdl = require('ytdl-core');

module.exports.run = async(Octopus, message, args) => {
    var url = 'https://www.youtube.com/watch?v=XTbpVVjpxhg';
      const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Lütfen Herhangi Bir Ses Kanalına Girin");
    if(message.guild.voiceConnection) return message.channel.send("Şuanda Ses Sunucusundayım");
    
    var connection = await voiceChannel.join();
    message.channel.send("**FBI OPEN UP**")

    const dispatcher = connection.playStream(ytdl(url))
        .on('end', () => {
            voiceChannel.leave();
        });
    dispatcher.setVolumeLogarithmic(5 / 5);
}

process.on('unhandledRejection', error => console.error(`İzin Hatası:\n${error}`));

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbi"],
      kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'fbi'
};