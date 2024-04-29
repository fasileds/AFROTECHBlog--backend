import Coment from "../models/coments.js";

export const createComent = async (req, res) => {
  const coment = Coment(req.body);
  try {
    const savedComent = await coment.save();
    res.json(savedComent);
  } catch (error) {
    res.satatus(500).json(error);
  }
};
export const getComents = async (req, res) => {
  try {
    const coments = await Coment.find();
    res.json(coments);
  } catch (error) {
    res.satatus(500).json(error);
  }
};
export const getComent = async (req, res) => {
  try {
    const coment = await Coment.findById(req.params.id);
    res.json(coment);
  } catch (error) {
    res.satatus(500).json(error);
  }
};
export const UpdateComent = async (req, res) => {
  try {
    const updateComent = await Coment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updateComent);
  } catch (error) {
    res.satatus(500).json(error);
  }
};
export const deleateComent = async (req, res) => {
  try {
    await Coment.findByIdAndDelete(req.params.id);
    res.send("the comment is sussfully delated");
  } catch (error) {
    res.satatus(500).json(error);
  }
};
