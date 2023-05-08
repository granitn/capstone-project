import MachineList from "@/components/MachineList";
import MachineForm from "@/components/MachineForm";
export default function HomePage() {
  return (
    <div>
      <h1>My Machine settings</h1>

      <MachineList />
      <MachineForm />
    </div>
  );
}
