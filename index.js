require('dotenv').config();

import cron from 'node-cron';
import checkBirthday from './checkBirthday';
import Discord from 'discord.js';

const {
    DISCORD_BOT_TOKEN,
    CHANNEL_NAME
} = process.env;

const client = new Discord.Client();

client.on('ready', () => {
    const channel = client.channels.cache.find( item => item.name === CHANNEL_NAME);

    if (!channel) return console.log(`invalid channel name`);
    console.log(`Logged in as ${client.user.tag}!`);

    cron.schedule(`0 8 * * *`, () => {
        checkBirthday(channel);
    });
});

client.login(DISCORD_BOT_TOKEN);