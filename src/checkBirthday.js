import birthdays from './birthdays.json';
import moment from 'moment';
import _ from 'lodash';

import 'babel-polyfill';

export default async (channel) => {
    try {
        const today = moment().format(`M/DD`);
        
        const current_birthdays = birthdays[today];
        
        for (const birthday of current_birthdays) {
            const url = _.replace(`https://animalcrossing.fandom.com/wiki/${birthday}`, ` `, `_`);
            channel.send(`It's ${birthday}'s birthday!\n\n${url}`)
        }
    } catch (err) {
        console.log(err);
    }
}