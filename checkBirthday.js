import birthdays from './birthdays.json';
import moment from 'moment';
import Discord from 'discord.js';

import 'babel-polyfill';

const {
    DISCORD_BOT_TOKEN,
    PRIMARY_CHANNEL
} = process.env;

const client = new Discord.Client();
client.login(DISCORD_BOT_TOKEN);

export default async () => {
    try {

        const today = moment().format(`M/DD`);
        
        const current_birthdays = birthdays[today];
        
        for (const birthday of current_birthdays) {
            const url = `https://animalcrossing.fandom.com/wiki/${birthday}`;
            console.log(birthday, url)
            const channel = client.channels.cache.get(PRIMARY_CHANNEL);
            channel.send(`It's ${birthday}'s birthday!\n\n${url}`)
        }
    } catch (err) {
        console.log(err);
    }
}