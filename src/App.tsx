import React from "react";
import "./App.css";

// ui
import Button from "./ui/Button/Button";
import Autocomplete from "./components/Autocomplete/ui/Autocomplete";

function App() {


  return (
    <div>
      <Button text="Click me" />
      <Autocomplete maxSuggestions={3} />
      <Autocomplete maxSuggestions={10} />
    </div>
  )
}

export default App;
