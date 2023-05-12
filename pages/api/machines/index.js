import dbConnect from "@/db/connect";
import Machine from "@/db/models/Machine";

//_id independent routes
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const machines = await Machine.find();
    return response.status(200).json(machines);
  }

  if (request.method === "POST") {
    try {
      const machineAddData = request.body;
      await Machine.create(machineAddData);

      response.status(201).json({ message: "Machine added" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
