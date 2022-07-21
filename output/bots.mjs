import { Client, GatewayIntentBits } from 'discord.js';
import { login, handleMessages } from 'suzufunctions';'use strict';
const bot = login("SBDoggosBot");
bot.on('login', () => {
    console.log("Logged in as " + bot.username);
})

bot.on("message", async (message) => {
    handleMessages(message);
});



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.GuildVoiceStates] });

client.on(`ready`, () => {
console.log(`Logged in as ${client.user.tag}`)});
client.login("OTA3Mzg1NzYzMTc4NjI3MTQy.GEWJKL.3f3EZY3evStyioq98uvYEbJ36ZvRK8crE6PWvc");
