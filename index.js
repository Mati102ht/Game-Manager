const keepAlive = require("./server");



const { Client, RichEmbed, Guild } = require('discord.js');

const client = new Client();

const prefix = `.`;


client.on('ready', () => {
  console.log('Zaladowano prawidlowo!');

client.user.setPresence({
  status: "online",
  game: {
    name: `${client.users.size} osob`,
    type: "WATCHING"
  }
})
});

///////////////////////////////////////////////Crab Game//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {

  if (message.content.startsWith(prefix + 'crabgame')) {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(10).trim();

    message.channel.send("@everyone")
    const embed = new RichEmbed()
      .setTitle('Kod do gry:')
      .setColor(0xfe187a)
      .setDescription(SayMessage)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      message.delete()
    message.channel.send(embed);
  }
});

///////////////////////////////////////////////Among Us//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {

    if (message.content.startsWith(prefix + 'amongus')) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(9).trim();
  
      message.channel.send("@everyone")
      const embed = new RichEmbed()
        .setTitle('Among Us KOD:')
        .setColor(0xc71012)
        .setDescription(SayMessage)
        .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp()
        message.delete()
      message.channel.send(embed);
    }
  });

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('');

