import MachineForm from "@/components/MachineForm";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLink } from "@/components/Link/Link.styled";
import UploadForm from "@/components/UploadForm";
import { useState } from "react";

// uses handed data and url in useSWRMutation
// to update machine via api/machines/[id] PUT route
async function updateMachine(url, { arg }) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error:${response.status}`);
  }
}
export default function CardEditPage() {
  const router = useRouter();
  //takes id and renames to machineId from query in url
  const { id: machineId } = router.query;

  //machineId used to load single machine from db via GET route (findById)
  const { data, isLoading, error } = useSWR(`/api/machines/${machineId}`);

  //used to same machine
  const { trigger, isMutating } = useSWRMutation(
    `api/machines/${machineId}`,
    updateMachine
  );

  const [imageUrl, setImageUrl] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return;
  }

  //constructs data object from form to be sent
  async function handleEditMachine(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const machineEditData = Object.fromEntries(formData);

    //hands data to updateMachine function
    await trigger(machineEditData);
    router.push("/");
  }

  function handleImageUpload(url) {
    setImageUrl(url);
  }

  if (isMutating) {
    return <div>changing Settings...</div>;
  }

  return (
    <>
      <MachineForm
        onSubmit={handleEditMachine}
        machine={data}
        imageUrl={imageUrl}
      />
      <UploadForm onUpload={handleImageUpload} />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}
