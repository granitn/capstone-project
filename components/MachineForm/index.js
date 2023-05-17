import { useEffect } from "react";
import {
  FormLabel,
  SubmitButton,
  FormInput,
  FormArea,
  StyledForm,
} from "./MachineForm.Styled";
import { useState } from "react";
import Image from "next/image";

export default function MachineForm({
  onSubmit,
  machine,

  imageUrl,
}) {
  const [pictureDefault, setPictureDefault] = useState(
    imageUrl || machine?.machineImage
  );

  useEffect(() => {
    setPictureDefault(imageUrl || machine?.machineImage);
  }, [imageUrl, machine?.machineImage]);

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h2>{machine ? "Edit Machine" : "Add new Machine"}</h2>
        <FormLabel htmlFor="name">Machine Name</FormLabel>

        <FormInput
          type="text"
          name="machineName"
          id="name"
          defaultValue={machine?.machineName}
          required
        />
        <FormLabel htmlFor="settings">
          {machine ? "Change Settings" : "Space for your Settings"}
        </FormLabel>

        <FormArea
          type="text"
          name="settings"
          id="settings"
          rows="4"
          placeholder="seperate settings with linebreaks/enter"
          defaultValue={machine?.settings}
          required
        />
        {machine && (
          <>
            <FormLabel htmlFor="image">Picture</FormLabel>
            <FormInput
              type="url"
              name="machineImage"
              id="image"
              value={pictureDefault}
              onChange={(e) => setPictureDefault(e.target.value)}
              placeholder="image url from unsplash"
            />
            {machine.machineImage && (
              <>
                <label> current image</label>
                <Image
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                  src={machine?.machineImage}
                  width={100}
                  height={100}
                  alt="Cards current image"
                />
              </>
            )}
          </>
        )}
        {imageUrl && (
          <>
            <label>new image </label>
            <Image
              style={{ objectFit: "cover", borderRadius: "50%" }}
              src={imageUrl}
              width={100}
              height={100}
              alt="Your uploaded image"
            />
          </>
        )}
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </>
  );
}
