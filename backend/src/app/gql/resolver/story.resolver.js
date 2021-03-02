const { models } = require("../../model/index");
const { parseObjectId } = require("../../../utils/utils");

const resolver = {
    async stories(args) {
        let storyFilter = {
                status: "A",
                ...parseObjectId(args?.story || {}),
            },
            userFilter = {
                status: "A",
                ...parseObjectId(args?.user || {}),
            };

        const result = await models.Story.aggregate([
            { $match: storyFilter },
            {
                $group: {
                    _id: "$user",
                    count: { $sum: 1 },
                    doc: { $first: "$$ROOT" },
                    mediasObj: { $push: "$medias" },
                },
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            "$doc",
                            { count: "$count", medias: "$mediasObj" },
                        ],
                    },
                },
            },
            {
                $lookup: {
                    from: "users",
                    let: { user_id: "$user" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ["$_id", "$$user_id"] },
                                        {
                                            ...(userFilter?._id && {
                                                $eq: ["$_id", userFilter._id],
                                            }),
                                        },
                                    ],
                                },
                            },
                        },
                        { $project: { name: 1, username: 1, avatar: 1 } },
                    ],
                    as: "user",
                },
            },
            { $unwind: "$user" },
        ]).exec();

        return result;
    },
};

module.exports = resolver;
