const mongoose = require("mongoose");
const config = require("../../config/config");

const connectDB = () => {
    if (config.env === "development") {
        return mongoose.connect(config.mongoose.url, config.mongoose.options);
    }
};

module.exports = {
    connectDB,
    models: {
        Post: require("./post.model"),
        User: require("./users.model"),
        Comment: require("./comments.model"),
        Story: require("./stories.model"),
        StoryGroup: require("./stories_group.model"),
    },
};
