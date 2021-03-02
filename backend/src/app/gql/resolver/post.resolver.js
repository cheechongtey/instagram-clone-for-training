const { models } = require("../../model/index");
const {
    parseObjectId,
    errorName,
    storeFS,
    uploadFileAction,
} = require("../../../utils/utils");
const { validateRecord } = require("../../service/validation.service");
const mongoose = require("mongoose");

const resolver = {
    async posts(args) {
        const result = await models.Post.paginate(args || {}, {
            options: {},
            populate: "user",
        });

        return result.data;
    },

    async createPosts(args) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const param = parseObjectId(args.param);
            param["images"] = await this.uploadPostImage(args.param.images);

            const validate = await validateRecord(
                {
                    status: "A",
                    _id: param.user,
                },
                "User"
            );

            if (validate.error === true) throw new Error(errorName.NOTFOUND);

            const doc = await models.Post(param);
            const result = await doc.save();

            await models.User.findOneAndUpdate(
                { _id: param.user },
                { $push: { posts: result._id } }
            );

            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.abortTransaction();
            return error;
        }
    },

    async updatePosts(args) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            args = parseObjectId(args);
            const { _id, param } = args;
            const validate = await validateRecord(
                {
                    _id,
                    status: "A",
                },
                "Post"
            );

            if (validate.error === true) throw new Error(errorName.NOTFOUND);

            if (param?.images && param.images.length !== 0)
                param.images = await this.uploadPostImage(args.param.images);

            const filter = { _id };
            const result = await this.updatePost(filter, param);

            if (!result) throw new Error("Failed to update post");

            await this.updatePostsRelatedDocuments(validate.result[0], result);

            await session.commitTransaction();
            return "hi";
        } catch (error) {
            session.endSession();
            return error;
        }
    },

    async updatePost(filter, data) {
        const result = await models.Post.findOneAndUpdate(
            filter,
            {
                $set: {
                    title: data.title,
                    status: data.status,
                    location: data.location,
                    user: data.user,
                },
                ...(data.images &&
                    data.images.length !== 0 && {
                        $push: { images: { $each: data.images } },
                    }),
            },
            { new: true }
        );

        return result;
    },

    async updatePostsRelatedDocuments(prevObj, newObj) {
        if (!prevObj.user.equals(newObj.user)) {
            await models.User.findOneAndUpdate(
                { _id: prevObj.user },
                { $pull: { posts: prevObj._id } }
            );
            await models.User.findOneAndUpdate(
                { _id: newObj.user },
                { $push: { posts: newObj._id } }
            );
        }
    },

    async uploadPostImage(images) {
        let result = await Promise.all(
            images.map((x) => uploadFileAction(x, "/post"))
        );

        return result.map((x) => ({
            _id: mongoose.Types.ObjectId(),
            img_path: x,
            status: "A",
        }));
    },
};

module.exports = resolver;
