import { useState } from "react";
import AddMessageForm from "./components/AddMessageForm";
import AllMessages from "./components/AllMessages";

function App() {
  const [messages, setMessages] = useState(null)

  const handler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const form = { ...Object.fromEntries(formData) }
    let view;

    const reader = new FileReader();
    reader.readAsText(form.file)
    console.log(reader);
    console.log(form.file);

    if (form.file instanceof Blob) {
      form.file.text().then((result) => console.log(result));
      form.file.arrayBuffer().then((result) => {
        view = result
        console.log(view);
        view = new Int32Array(view);
        console.log(view);

      });

      view = new Int32Array();

    }
  }

  return (
    <div>
      message app
      <AllMessages messages={messages} setMessages={setMessages} />
      <AddMessageForm setMessages={setMessages} />
      <form onSubmit={handler}>
        <input name="text" type="text" />
        <input name="file" type="file" />
        <button>LOG</button>
      </form>
    </div>
  );
}

export default App;
