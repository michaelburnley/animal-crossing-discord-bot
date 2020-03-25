# Overview

Bot for checking Villager Birthdays in Animal Crossing!

## Commands
- Change birthday greeting text: 
  - Tag bot and enter a message with `#name` in it and your format will be set
  - e.g. `@VillagerBirthdays It's #name birthday today!`

1. Add a .env file
2. Add the following to the .env file
    - `DISCORD_BOT_TOKEN='bot token from https://discordapp.com/developers/'`
    - `CHANNEL_NAME='name of channel'`
    - `CRON_TIME='cron time schedule seperated by dashes: e.g. 0-8-*-*-* for 8am'`
3. Run `npm i`
4. Run `npm start` on your server