import mongoose from "mongoose";

const { Schema } = mongoose;

const machineSchema = new Schema({
  machineName: { type: String, required: true },
  settings: { type: String, required: true },
  image: String,
});

const Machine =
  mongoose.models.Machine || mongoose.model("Machine", machineSchema);

export default Machine;
