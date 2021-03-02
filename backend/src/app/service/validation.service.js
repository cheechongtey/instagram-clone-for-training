const { models } = require("../model/index");
const { parseObjectId, errorName } = require("../../utils/utils");
const logger = require("winston");

const validation = {
    async validateRecord(filter, collectionName) {
        try {
            const result = await models[collectionName].find(filter);

            return {
                result,
                error: result.length === 0,
            };
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = validation;
