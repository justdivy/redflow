import BloodBank from "../models/BloodBank.js";

//Create Blood Bank
export const createBloodBank = async (req, res) => {
  try {
    const { name, address, city, contactNumber, email, bloodTypes } = req.body;

    if (!name || !contactNumber || !email || !bloodTypes) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newBank = new BloodBank({
      name,
      address,
      city,
      contactNumber,
      email,
      bloodTypes,
      createBy: req.user._id, //from protect middleware
    });

    // save the bloodBank directly, and reeturn it
    const result = await newBank.save();

    res.status(201).json(result);
  } catch (error) {
    console.log("Error creating blood bank:", error.message);
    res.status(500).json({ message: error.message });
  }
  //   const saveBank = await newBank.save();
  //   res.status(201).json(savedBank);
  // } catch (error) {
  //   console.log("Error creating blood bank", error.message);
  //   res.status(500).json({ message: "Server Error" });
  // }
};

//Get All Blood Bank
export const getBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE BLOOD BANK

export const updateBloodBank = async (req, res) => {
  try {
    const updated = await BloodBank.findByIdAndUpdate(
      req.params.id,
      req.boody,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updated)
      return res.status(404).json({
        message: "Blood Bank not found",
      });
    res.json(updated);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//DELETE BLOOD BANK

export const deleteBloodBank = async (req, res) => {
  try {
    const deleted = await BloodBank.findOneAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({
        message: "Blood Bank not found",
      });
    res.json({ message: "Blood Bank deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
