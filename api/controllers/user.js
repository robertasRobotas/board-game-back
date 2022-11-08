const UserSchema = require("../models/userModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_USER = function (req, res) {
  const user = new UserSchema({
    name: req.body.name,
    email: req.body.email,
    totalTasksDone: 0,
    taskIds: [],
  });

  user.save().then((result) => {
    return res.status(200).json({ response: "User was created successfully" });
  });
};

module.exports.GET_USER = async function (req, res) {
  const data = await UserSchema.aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "taskIds",
        foreignField: "id",
        as: "user_tasks",
      },
    },
    { $match: { _id: ObjectId(req.params.id) } },
  ]).exec();

  console.log(data);

  return res.status(200).json({ user: data });
};
