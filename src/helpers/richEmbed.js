const _ = require('lodash');
const Discord = require('discord.js');


module.exports = (data) => {

    const {
        title,
        author,
        image,
        color,
        description,
        footer,
        thumbnail,
        fields,
        timestamp,
        url,
    } = data;
    
    // const embed = new RichEmbed();
    const embed = new Discord.MessageEmbed()

    if (title) embed.setTitle(title)
    if (author) embed.setAuthor(author)
    if (color) embed.setColor(color)
    if (description) embed.setDescription(description)
    if (footer) embed.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    if (image) embed.setImage(image)
    if (thumbnail) embed.setThumbnail(thumbnail)
    if (timestamp) embed.setTimestamp(timestamp)
    if (url) embed.setURL(url)

    if (fields) {
          _.each(fields, (field) => {
                const [first, second] = _.split(field, `\n`);

                second ? embed.addField(first, second) : embed.addField(first);
                
          })
    }

    return embed;
}