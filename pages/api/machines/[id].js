import dbConnect from "@/db/connect";
import Machine from "@/db/models/Machine";

//_id dependent routes
export default async function handler(request, response) {
  await dbConnect();
  const machineId = request.query.id;

  if (request.method === "GET") {
    const machine = await Machine.findById(machineId);
    return response.status(200).json(machine);
  }

  if (request.method === "PUT") {
    const machineUpdateData = request.body;
    const machine = await Machine.findByIdAndUpdate(
      machineId,
      machineUpdateData
    );

    if (!machine) {
      return response.status(404).json({ status: "Machine not found" });
    }
    return response.status(200).json({ status: "Machine updated" });
  }

  if (request.method === "DELETE") {
    const machine = await Machine.findByIdAndDelete(machineId);

    if (!machine) {
      return response.status(404).json({ status: "Machine not found" });
    }

    return response.status(200).json({ status: "Machine deleted" });
  }
}
