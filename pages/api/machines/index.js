import dbConnect from "@/db/connect";
import Machine from "@/db/models/Machine";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const machines = await Machine.find();
    return response.status(200).json(machines);
  }

  response.status(404).json({ message: "Not found" });
}
