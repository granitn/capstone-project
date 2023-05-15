import { useState } from "react";

export default function UploadForm() {
  const [image, setImage] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    console.log(json);
    console.log(json.secure_url);
  }

  return (
    <>
      <h2>Image Upload</h2>
      <form onSubmit={handleFileUpload}>
        <p>
          <label htmlFor="imageInput">please choose an image</label>
        </p>
        <input type="file" id="imageInput" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
