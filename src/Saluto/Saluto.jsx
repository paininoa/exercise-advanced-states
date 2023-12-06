import { useState } from "react";

export default () => {
  const [userName, setUserName] = useState("");
  const [currentName, setCurrentName] = useState("");

  return (
    <>
      <h3>Esercizio 1</h3>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          setCurrentName(userName);
          setUserName("");
        }}
      >
        Invia
      </button>
      <p>
        {currentName.trim() !== ""
          ? `Ciao ${currentName}!`
          : "Scrivi il tuo nome"}
      </p>
    </>
  );
};
