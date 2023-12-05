// Crea una React APP che ha almeno tre componenti principali:
// 1. Un componente in cui l'utente inserisce il suo nome, e al click di
// un bottone "Invia", gli viene mostrato nel documento un messaggio di saluto.
// 2. Un componente in cui l'utente inserisce i dati di un form (email, password,
//   colore preferito, input radio per il sesso). Colore preferito è un select
//   tra rosso, verde o blu.
// Al click di un bottone "Registrati", mostra un messaggio di ringraziamento
// all'utente e stampa in console un oggetto che rappresenta il form compilato.
// 3. Un componente per la lista degli invitati ad una festa. Inizialmente la lista
// è vuota. L'utente puo inserire invitati alla lista tramite un input (similmente a
//   come abbiamo visto a lezione con la lista della spesa). Per ogni invitato, ci
//   sono un bottone elimina e un bottone saluta, che mostra un saluto all'invitato
//   in fondo al documento.

import { useState } from "react";
import "./App.css";
import Saluto from "./Saluto/Saluto";
import Form from "./Form/Form";
import Invitati from "./Invitati/Invitati";

function App() {
  return (
    <div id="pageWrapper">
      <h1>
        05/12 <br />
        exercise-advanced-states
      </h1>

      <div>
        <Saluto />
      </div>

      <div>
        <Form />
      </div>

      <div>
        <Invitati />
      </div>
    </div>
  );
}

export default App;
