require('dotenv').config();

import cron from 'node-cron';
import Discord from 'discord.js';
import _ from 'lodash';
import checkBirthday from './src/checkBirthday';

const {
    DISCORD_BOT_TOKEN,
    CHANNEL_NAME,
    CRON_TIME
} = process.env;

const client = new Discord.Client();

client.on('ready', () => {
    const channel = client.channels.cache.find( item => item.name === CHANNEL_NAME);

    if (!channel) return console.log(`invalid channel name`);
    console.log(`Logged in as ${client.user.tag}!`);

    if (!CRON_TIME) return console.log(`No scheduled time to run.`)
    const time = _.replace(CRON_TIME, /-/g, ` `);

    cron.schedule(time, () => {
        checkBirthday(channel);
    });
});

client.login(DISCORD_BOT_TOKEN);