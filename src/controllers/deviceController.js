import Device from "../models/Device.js";

// get all devices
export const getAllDevices = async (req, res) => {
    console.log("GET ALL DEVICES ROUTE HIT");
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get single device details (admin only)
export const getDeviceById = async (req, res) => {
  try {
    const device = await Device.findOne({ id: req.params.id });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.json(device);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
