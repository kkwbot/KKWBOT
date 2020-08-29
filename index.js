'use strict';

// Import the discord.js module
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
// commande en ligne
client.on('message', (msg) => {

    const channel = msg.guild.channels.cache.find(ch => ch.name === 'bienvenue');
    if (msg.content === `${prefix}ok`) {
        msg.delete();
        channel.send('Bonjour, un membre du Staff vous a vu, dans quelques instants, il vous accueillera dans le canal voice 🙋Bienvenue ci-dessous.');
    }
    if (msg.content === `${prefix}no`) {
        msg.delete();

        channel.send(`Bonjour, un membre du Staff vous a vu, il n\'est malheureusement pas disponible pour instant. Vous pouvez patienter ou revenir plus tard.`);
    }
    if (msg.content === `${prefix}!`) {
        msg.delete();

        channel.send(`https://gyazo.com/759c43afb3a00d84c13a8d843c4e6708`);
    }
});
// Message d'accueil
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenue');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(` \n
  Bienvenue ${member}
  Afin de finaliser votre inscription, vous devez vous faire enregistrer par un membre du Staff.
  En attendant, si ce n'est pas encore fait, réglez les paramètres de votre Discord.
  Cliquez en bas à gauche à coté de votre profil sur l’icône (roue cranté) « paramètre d’utilisateur » :
  Régler les périphériques d’entrée et de sortie dans « Voix & Vidéo », et
  choisir appuyer pour parler et assigner une touche.\n
  C'est fait ? entrez dans le canal voice 🙋Bienvenue ci-dessous.
  Dès qu'un membre du Staff vous verra, il viendra vous accueillir et finalisera votre inscription.
  (Présence du Staff régulier, en semaine de 18h à 22h local, le w-e de 9h à 22h)
https://discord.gg/JpeYeXW`);
});
client.login(process.env.TOKEN)

