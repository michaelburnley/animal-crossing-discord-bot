import dotenv from 'dotenv';
import cron from 'node-cron';
import checkBirthday from './checkBirthday';

dotenv.config();

cron.schedule('0 8 * * *', () => {
    checkBirthday();
});
