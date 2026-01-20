import DonationRequest from "../models/DonationRequest.js";

export const createRequest = async (req, res) => {
  try {
    const request = await DonationRequest.create(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRequests = async (req, res) => {
  try {
    const requests = await DonationRequest.find().populate("user");
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const request = await DonationRequest.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update Donation Request

export const updateRequest = async (req, res) => {
  try {
    const updated = await DonationRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated)
      return res.status(404).json({
        message: "Request not found",
      });
      res.json(updated)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//DELETE DONATION REQUEST
export const deleteRequest = async (req, res) => {
  try {
    const deleted = await DonationRequest.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({
        message: "Request not found",
      });
    res.json({
      message: "Request deleted successfully..",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
