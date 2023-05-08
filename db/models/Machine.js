import mongoose from "mongoose";

const { Schema } = mongoose;

const machineSchema = new Schema({
  machineName: String, //{ type: String, required: true },
  settings: String, //{ type: String, required: true },
  machineImage: String,
});

const Machine =
  mongoose.models.Machine || mongoose.model("Machine", machineSchema);

export default Machine;
