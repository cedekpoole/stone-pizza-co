import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p>Lets get to know you better. What&apos;s your name?</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72"
      />

      {username !== "" && (
        <div className="mt-5">
          <Button>Start order</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
