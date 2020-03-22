import birthdays from './birthdays.json';
import moment from 'moment';
import _ from 'lodash';

import 'babel-polyfill';

export default (channel) => {
    const today = moment().format(`M/DD`);
    const current_birthdays = birthdays[today];
    const urls = _.map(current_birthdays, birthday => (_.replace(`https://animalcrossing.fandom.com/wiki/${birthday}`, ` `, `_`)))
    const names = _.join(current_birthdays, `'s and `);

    try {
        channel.send(`\:tada: It's **${names}**'s birthday! \:tada:\n\n${_.join(urls, `\n`)}`);
    } catch (err) {
        console.log(err);
    }
}