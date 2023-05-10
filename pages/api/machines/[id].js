import dbConnect from "@/db/connect";
import Machine from "@/db/models/Machine";

export default async function handler(request, response) {
  await dbConnect();
  const machineId = request.query.id;

  if (request.method === "DELETE") {
    const machine = await Machine.findByIdAndDelete(machineId);

    if (!machine) {
      return response.status(404).json({ status: "Machine not found" });
    }

    return response.status(200).json({ status: "Machine deleted" });
  }
}
