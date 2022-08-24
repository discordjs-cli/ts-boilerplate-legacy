export = {
    name: "$command_name%",
    aliases: [],
    description: "%command_name% command",
    execute(message, args) {
        message.reply('%command_name% works!');
    }
};