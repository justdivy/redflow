import BloodRequest from "../models/BloodRequest.js";

export const createBloodRequest = async (req, res) => {
  try {
    const {
      fullName,
      hospitalName,
      city,
      bloodGroup,
      units,
      requiredDate,
      notes,
    } = req.body;

    // ✅ Validation
    if (
      !fullName ||
      !hospitalName ||
      !city ||
      !bloodGroup ||
      !units ||
      !requiredDate
    ) {
      return res.status(400).json({
        message: "All required fields must be filled",
      });
    }

    const newRequest = await BloodRequest.create({
      fullName,
      hospitalName,
      city,
      bloodGroup,
      units,
      requiredDate,
      notes,
      requestedBy: req.user._id, // ✅ correct
    });

    res.status(201).json({
      success: true,
      message: "Blood request submitted successfully",
      request: newRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
