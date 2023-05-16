import { useEffect } from "react";
import {
  FormLabel,
  SubmitButton,
  FormInput,
  FormArea,
  StyledForm,
} from "./MachineForm.Styled";
import { useState } from "react";

export default function MachineForm({
  onSubmit,
  machine,
  imageThere,
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
        {!imageThere && (
          <>
            <FormLabel htmlFor="image">Picture</FormLabel>
            <FormInput
              type="url"
              name="machineImage"
              id="image"
              value={pictureDefault}
              onChange={(e) => setPictureDefault(e.target.value)}
              // defaultValue={pictureDefault ? machine?.machineImage : imageUrl}
              placeholder="image url from unsplash"
              // pattern="(https://images.unsplash.com/.*) | (https://res.cloudinary.com/dko3rskom/.*)"
            />
          </>
        )}
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </>
  );
}
