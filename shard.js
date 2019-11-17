const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const ayarlar = require("./ayarlar.json")
var request = require('request');
const http = require('http');
const imam = new Discord.ShardingManager('./index.js', {
    totalShards: 1,
    token: process.env.TOKEN
});

imam.spawn();

imam.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı. Diğer Shard Başlatılıyor...`)
});

setTimeout(() => {
    console.log("Yeniden başlatılıyor.")
    imam.broadcastEval("process.exit()");
}, 21600000);


const authorizationKey = 'anan1',
      webhookID = '551138630492618762',
      webhookToken = 'xaXAGFRGUC0WWj5L-S2RezPegpDG1SnERxJ9JF0j0BXJnRoORrMzjGodpTiGl3wcFa-S';

const 
     
      bodyParser = require('body-parser'), // DO NOT TRY TO CHANGE THIS LINE IF YOU CHANGE THIS LINE VOTEHOOK WILL DIE!
      morgan = require('morgan'), // DO NOT TRY TO CHANGE THIS LINE IF YOU CHANGE THIS LINE VOTEHOOK WILL DIE!
      { RichEmbed } = require('discord.js'), // DO NOT TRY TO CHANGE THIS LINE IF YOU CHANGE THIS LINE VOTEHOOK WILL DIE!
      { WebhookClient } = require('discord.js'), // DO NOT TRY TO CHANGE THIS LINE IF YOU CHANGE THIS LINE VOTEHOOK WILL DIE!
      hook = new WebhookClient(webhookID, webhookToken); // DO NOT TRY TO CHANGE THIS LINE IF YOU CHANGE THIS LINE VOTEHOOK WILL DIE!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));


app.post('/vote', (req, res) => {
    var authorization = req.headers.authorization;
      
    var bot = req.body.bot;
    var user = req.body.user;
    var type = req.body.type;

    if (!bot || !user || !type || !authorization) {
        res.setHeader('Content-Type', 'text/plain'); 
        res.statusCode = 403;
        return res.end('MISSING_PARAMS'); 
    };
      
    if (authorization != authorizationKey) {
        res.setHeader('Content-Type', 'text/plain'); 
        res.statusCode = 403;
        return res.end('WRONG_SECRET'); 
    };

    if (type === 'upvote') {
        var embed = new RichEmbed({
            color: 3447003,
            title: `Yeni bir oy alındı!`,
            description: `<@${user}> bota DBL üzerinde bir oy verdi!`,
            timestamp: new Date()
        });
        
        hook.send({ embeds: [embed] });

        res.statusCode = 200; 
        return res.end('OK');

    } else if (type === 'test') {
        var embed = new RichEmbed({
            color: 3447003,
            title: `Başarılı!`,
            description: `DBL test başarılı Votehook düzgün şekilde çalışıyor!`,
            timestamp: new Date()
        });
        
        hook.send({ embeds: [embed] });

        res.statusCode = 200; 
        return res.end('OK');

    }

})