import useSWR from "swr";
import MachineCard from "@/components/MachineCard";
import { StyledList } from "./MachineList.styled";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function MachineList() {
  const { data, error } = useSWR("/api/machines", fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <StyledList>
      {data.map((machine) => (
        <li key={machine._id}>
          <MachineCard machine={machine} />
        </li>
      ))}
    </StyledList>
  );
}
