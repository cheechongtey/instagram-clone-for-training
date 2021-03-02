const mongoose = require("mongoose");
const pathPlugin = require("path");
const fs = require("fs");

const uploadFileAction = async (upload, destination) => {
    if (!upload?.file) await upload.promise;

    const { path } = await storeFS({
        file: upload.file,
        uploadPath: destination,
    });
    console.log(path);
    return path;
};

const storeFS = async ({ file, uploadPath }) => {
    const { filename, createReadStream } = await file;
    const uploadDir = pathPlugin.join(
        __dirname,
        `../../public/medias/${uploadPath}/${filename}`
    );
    const stream = createReadStream();

    return new Promise((resolve, reject) =>
        stream
            .on("error", (error) => {
                if (stream.truncated)
                    // delete the truncated file
                    fs.unlinkSync(uploadDir);
                reject(error);
            })
            .pipe(fs.createWriteStream(uploadDir))
            .on("error", (error) => reject({ path: "", error }))
            .on("finish", () => resolve({ path: `${uploadPath}/${filename}` }))
    );
};

const sendResponse = (res, param, statusCode = "") => {
    const { result, error, message } = param;
    const code = !statusCode ? (error === 0 ? 200 : 400) : statusCode;

    return res.status(code).json({
        ...result,
        message,
    });
};

const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});
};

const parseObjectId = (object) => {
    for (var key in object) {
        if (key.match(/id/g)) {
            object[key] = new mongoose.Types.ObjectId(object[key]);
        } else {
            if (typeof object[key] === "object") {
                object[key] = parseObjectId(object[key]);
            }
        }
    }

    return object;
};

const errorName = {
    NOTFOUND: "NOTFOUND",
    SERVER_ERROR: "SERVER_ERROR",
    STORE_FAILED: "SERVER_ERROR",
};

const errorType = {
    NOTFOUND: {
        message: "Requested record not found",
        statusCode: 400,
    },
    SERVER_ERROR: {
        message: "Something went wrong",
        statusCode: 500,
    },
    STORE_FAILED: {
        message: "Record failed to store",
        statusCode: 400,
    },
};

module.exports = {
    sendResponse,
    pick,
    parseObjectId,
    errorName,
    errorType,
    storeFS,
    uploadFileAction,
};
