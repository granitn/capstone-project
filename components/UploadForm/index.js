import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";
import { StyledImageForm } from "../UploadForm/UploadForm.styled";

const StyledUploadHeader = styled.h2`
  text-align: center;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  cursor: pointer;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  padding: 0.5rem;
  border-radius: 1rem;
`;

const UploadButton = styled.button`
  cursor: pointer;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  border-radius: 2rem;
  width: 5rem;
  height: 2.5rem;
  border: none;
`;

export default function UploadForm({ onUpload }) {
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleFileUpload(event) {
    event.preventDefault();

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const json = await response.json();

      if (onUpload) {
        onUpload(json.secure_url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <>
      <StyledUploadHeader>Image Upload</StyledUploadHeader>
      <StyledImageForm onSubmit={handleFileUpload}>
        <p>
          <ImageLabel htmlFor="imageInput">please choose an image</ImageLabel>
        </p>
        <ImageInput type="file" id="imageInput" onChange={handleFileChange} />
        <UploadButton type="submit" disabled={!image}>
          {isUploading ? "Uploading..." : "Upload"}
        </UploadButton>
      </StyledImageForm>
    </>
  );
}
