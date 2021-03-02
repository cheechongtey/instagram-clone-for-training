const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        like: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            default: "A",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        images: {
            type: Array,
            default: [],
        },
        location: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
        collection: "articleMasters",
    }
);

postSchema.plugin(toJSON);
postSchema.plugin(paginate);

const Post = mongoose.model("articleMasters", postSchema);

module.exports = Post;
