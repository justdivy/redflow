import AmbulanceService from "../models/AmbulanceService.js";

export const createAmbulance = async (req, res) => {
  try {
    const ambulance = await AmbulanceService.create(req.body);
    res.status(201).json(ambulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAvailableAmbulances = async (req, res) => {
  try {
    const ambulances = await AmbulanceService.find({ available: true });
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAvailability = async (req, res) => {
  try {
    const ambulance = await AmbulanceService.findByIdAndUpdate(
      req.params.id,
      {
        available: req.body.available,
      },

      {
        new: true,
      }
    );
    res.status(200).json(ambulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE AMBULANCE REQUEST
export const updateAmbulance = async (req, res) => {
  try {
    const updated = await AmbulanceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated)
      return res.status(404).json({
        message: "Service not found",
      });
    res.json(updated);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//Delete Ambulance Service
export const deleteAmbulance = async (req, res) => {
  try {
    const deleted = await AmbulanceService.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(401).json({
        message: "Service not found",
      });
    res.json({
      message: "Service deleted successfull..",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
