import useSWR from "swr";
import MachineCard from "@/components/MachineCard";
import { StyledList } from "./MachineList.styled";
import { StyledButton } from "../Button/Button.styled";
import { useRouter } from "next/router";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function MachineList() {
  const router = useRouter();
  const { data, error } = useSWR("/api/machines");

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
      <StyledButton type="button" onClick={() => router.push("/form")}>
        Add
      </StyledButton>
    </StyledList>
  );
}
