const { Story } = require("../model");

const StoryService = {
    getStory: async () => {
        // const stories = await Story.aggregate([
        //     { $match: { status: "A" } },
        //     {
        //         $group: {
        //             _id: "$user",
        //             count: { $sum: 1 },
        //             doc: { $first: "$$ROOT" },
        //         },
        //     },
        //     {
        //         $replaceRoot: {
        //             newRoot: { $mergeObjects: ["$doc", { count: "$count" }] },
        //         },
        //     },
        //     {
        //         $lookup: {
        //             from: "users",
        //             let: { user_id: "$user" },
        //             pipeline: [
        //                 {
        //                     $match: {
        //                         $expr: {
        //                             $and: [{ $eq: ["$_id", "$$user_id"] }],
        //                         },
        //                     },
        //                 },
        //                 { $project: { name: 1, username: 1, avatar: 1 } },
        //             ],
        //             as: "author",
        //         },
        //     },
        //     { $unwind: "$author" },
        //     { $unwind: "$medias" },
        // ]).exec();

        const stories = await Story.aggregate([
            { $match: { status: "A" } },
            {
                $group: {
                    _id: "$user",
                    count: { $sum: 1 },
                },
            },
        ]).exec();
        console.log(stories);
        return stories;
    },
};

module.exports = StoryService;
