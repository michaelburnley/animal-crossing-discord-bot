import birthdays from './birthdays.json';
import moment from 'moment';
import _ from 'lodash';
import richEmbed from './helpers/richEmbed';

import 'babel-polyfill';

export default (channel, cache) => {
    console.log(cache)
    const today = moment().format(`M/DD`);
    const current_birthdays = birthdays[today];
    const urls = _.map(current_birthdays, birthday => (_.replace(`https://animalcrossing.fandom.com/wiki/${birthday}`, ` `, `_`)))
    const names = _.join(current_birthdays, `'s and `);
    const message_text = cache[channel.guild.id] ?
    `${_.replace(cache[channel.guild.id].format, `#name`, `**${names}**`)}\n\n${_.join(urls, `\n`)}` :
    `\:tada: It's **${names}**'s birthday! \:tada:\n\n${_.join(urls, `\n`)}`;
    // const message_text = `${_.replace(cache[channel.guild.id].format, `#name`, `**${names}**'s`)}\n\n${_.join(urls, `\n`)}`;
    try {
        // channel.send(`\:tada: It's **${names}**'s birthday! \:tada:\n\n${_.join(urls, `\n`)}`);
        channel.send(message_text);
    } catch (err) {
        console.log(err);
    }
}