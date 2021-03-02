const { models } = require("../../model/index");
const {
    parseObjectId,
    errorName,
    uploadFileAction,
} = require("../../../utils/utils");
const mongoose = require("mongoose");

const resolver = {
    async users(args) {
        const result = await models.User.paginate(args || {}, {
            options: {},
            populate: "posts",
        });
        return result.data;
    },
    async createUser(args) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const param = parseObjectId(args.param);
            if (param?.avatar && param.avatar.length)
                param["avatar"] = await this.uploadUserAvatar(
                    args.param.avatar
                );

            const doc = await models.User(param);
            const result = await doc.save();

            if (!result) throw new Error("Failed to add user");

            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.abortTransaction();
            return error;
        }
    },
    async uploadUserAvatar(images) {
        let result = await Promise.all(
            images.map((x) => uploadFileAction(x, "/avatar"))
        );

        return result[0] || "";
    },
};

module.exports = resolver;
