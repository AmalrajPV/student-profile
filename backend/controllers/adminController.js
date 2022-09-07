import profileModel from "../models/profileModel.js";
import verifyRequestsModel from "../models/verifyRequestsModel.js";


export const showRequests = async (req, res, next) => {
  try {
    const reqs = await verifyRequestsModel.find();
    return res.status(200).json(reqs);
  } catch (error) {
    return res.status(400).json(error);
  }
};


export const acceptRequest = async (req, res, next) => {
  try {
    const user = req.params.id;
    const prof = await profileModel.findOneAndUpdate(
      user,
      {
        $set: {
          verified: true,
        },
      },
      { new: true }
    );
    await verifyRequestsModel.findOneAndDelete(user);
    return res.status(200).json({ message: "verified", ...prof });
  } catch (error) {
    return res.status(400).json(error);
  }
};
