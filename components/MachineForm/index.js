import useSWRMutation from "swr/mutation";

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

export default function MachineForm() {
  const { trigger } = useSWRMutation("/api/machines", sendRequest);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const machineAddData = Object.fromEntries(formData);
    await trigger(machineAddData);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new machine</h3>
      <label htmlFor="image">
        Machine Picture:
        <input type="text" name="image" id="image" />
      </label>
      <label htmlFor="name">
        Machine Name:
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="settings">
        Machine Settings:
        <input type="textarea" name="settings" id="settings" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
