const Jimp = require("jimp");

const formattingAvatar = async (path) => {
  const image = await Jimp.read(path);
  return await image.resize(250, 250).writeAsync(path);
};

module.exports = formattingAvatar;