const mineflayer = require('mineflayer');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const bot = mineflayer.createBot({
  host: "6b6t.org",
  port: 25565,
  username: "neqt3r",   
  auth: "offline",       
  version: "1.20.1"
});

bot.once("spawn", () => {
  setTimeout(() => {
    bot.chat(`/login ${config.KITBOT_PASSWORD}`);
  }, 2000);

  setTimeout(() => {
    bot.setControlState("forward", true);
  }, 5000);
});
