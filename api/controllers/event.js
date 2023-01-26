const EventSchema = require("../models/eventModel");

module.exports.CREATE_EVENT = async function (req, res) {
  try {
    console.log(req.body);

    const event = new EventSchema({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      author: req.body.author,
      requiredPlayers: req.body.requiredPlayers,
      address: req.body.address,
      boardgameName: req.body.boardgameName,
      boardgameImage: req.body.boardgameImage,
      joinedPlayers: [],
    });

    const result = await event.save();

    return res.status(200).json({
      event: result,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_EVENTS = async function (req, res) {
  try {
    const result = await EventSchema.find().sort("date").exec();
    return res.status(200).json({ event: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_EVENT = async function (req, res) {
  try {
    const result = await EventSchema.findOne({ _id: req.params.id }).exec();

    const games = await EventSchema.find({
      joinedPlayers: { $all: [req.body.data.userId] },
      _id: result._id,
    }).exec();

    const isUserJoinedGame = games.length === 0 ? false : true;

    return res
      .status(200)
      .json({ event: result, isUserJoinedGame: isUserJoinedGame });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.JOIN_EVENT = async (req, res) => {
  try {
    const result = await EventSchema.updateOne(
      { _id: req.params.id },
      { $push: { joinedPlayers: req.body.data.userId } }
    ).exec();

    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", result: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.LEAVE_EVENT = async (req, res) => {
  try {
    const result = await EventSchema.updateOne(
      { _id: req.params.id },
      { $pull: { joinedPlayers: req.body.data.userId } }
    ).exec();

    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", result: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.DELETE_EVENT = async (req, res) => {
  try {
    await EventSchema.deleteOne({ _id: req.params.id }).exec();

    return res.status(200).json({ statusMessage: "Eddited successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
