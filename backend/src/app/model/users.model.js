const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid email");
                }
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 8,
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error(
                        "Password must contain at least one letter and one number"
                    );
                }
            },
            private: true, // used by the toJSON plugin
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "articleMasters",
            },
        ],
        stories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "stories",
            },
        ],
        stories_group: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "storiesGroups",
            },
        ],
        avatar: {
            type: String,
        },
        status: {
            type: String,
            default: "A",
        },
    },
    {
        timestamps: true,
        collection: "users",
    }
);

userSchema.plugin(toJSON);
// userSchema.plugin(paginate);

userSchema.pre("save", async function () {
    this.password = await this.generatePasswordHash();
});

userSchema.methods.generatePasswordHash = async function () {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
};

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("users", userSchema);

module.exports = User;
