import useSWR from "swr";
import MachineCard from "@/components/MachineCard";
import { StyledList } from "./MachineList.styled";

export default function MachineList() {
  const { data, isLoading, error } = useSWR("/api/machines");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return;
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
