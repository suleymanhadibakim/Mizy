const ytdl = require('ytdl-core');

module.exports.run = async(Octopus, message, args) => {
    var url = 'https://www.youtube.com/watch?v=a_6CZ2JaEuc';
    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Lütfen Herhangi Bir Ses Kanalına Girin");
    if(message.guild.voiceConnection) return message.channel.send("Şuanda Ses Sunucusundayım");
    
    var connection = await voiceChannel.join();
    message.channel.send("Havalı Korna Geliyor!")
        .then(msg => {
            msg.delete(10000)
        });

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
  aliases: ["havalıkorna"],
      kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'havalı-korna'
};