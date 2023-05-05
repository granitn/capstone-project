import useSWR from "swr";
import MachineCard from "@/components/MachineCard";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function MachineList() {
  const { data, error } = useSWR("/api/machines", fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) {
    return <div>loading...</div>;
  }
  //   console.log(data);
  //   console.log(data[1].settings);
  //   console.log(data[1].machineName);
  return (
    <ul>
      {data.map((machine) => (
        <li key={machine._id}>
          <MachineCard machine={machine} />
        </li>
      ))}
    </ul>
  );
}
