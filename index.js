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

const cache = {

};

client.on('ready', () => {

    const channel = client.channels.cache.find( item => item.name === CHANNEL_NAME);

    if (!channel) return console.log(`invalid channel name`);
    console.log(`Logged in as ${client.user.tag}!`);

    if (!CRON_TIME && !cron.validate(_.replace(CRON_TIME, /-/g, ` `))) return console.log(`No scheduled time to run.`)
    const time = _.replace(CRON_TIME, /-/g, ` `);

    cron.schedule(time, () => {
        checkBirthday(channel, cache);
    }, {
        scheduled: true,
        timezone: `America/Los_Angeles`
    });
});

client.on('message', (message) => {
    const {
        user,
        id,
        guild,
        content,
    } = message;

    const bot = message.mentions.users.find(x => x.username === `VillagerBirthdays`)

    if (!bot) return;

    const message_text = _.replace(content, `<@!${bot.id}> `, ``);

    if (!_.includes(message_text, `#name`)) return message.channel.send(`Selection does not include \`#name\``);

    cache[guild.id] = {
        format: message_text,
    };

    message.channel.send(`Set format to: "${message_text}"`);

});

client.login(DISCORD_BOT_TOKEN);