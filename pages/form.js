import MachineForm from "@/components/MachineForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledLink } from "@/components/Link/Link.styled";
import useSWRMutation from "swr/mutation";
import UploadForm from "@/components/UploadForm";

// uses handed data and url in useSWRMutation to add machine via api/machines POST route
async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  return response.json();
}

export default function FormPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const { trigger } = useSWRMutation("/api/machines", sendRequest);
  const router = useRouter();

  //constructs data object from form to be sent
  async function handleAddSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const machineAddData = Object.fromEntries(formData);

    if (imageUrl) {
      machineAddData.machineImage = imageUrl;
    }

    //hands data to sendRequest function
    await trigger(machineAddData);

    router.push("/");
    event.target.reset();
  }

  function handleImageUpload(url) {
    setImageUrl(url);
  }

  return (
    <>
      <MachineForm onSubmit={handleAddSubmit} imageThere={imageUrl} />
      <UploadForm onUpload={handleImageUpload} />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}
