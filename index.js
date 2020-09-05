require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = NzUxODQ0ODI3OTE3ODQ0NTMx.X1PADw.7ZXLvCLZ3uG0n0FwTH4zRooHZZc
;

bot.login(NzUxODQ0ODI3OTE3ODQ0NTMx.X1PADw.7ZXLvCLZ3uG0n0FwTH4zRooHZZc
);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

