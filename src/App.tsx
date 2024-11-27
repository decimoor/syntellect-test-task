import React from "react";
import "./App.css";

// components
import Autocomplete from "./components/Autocomplete/ui/Autocomplete";
import ControlWithButtons, { IControlButton } from "./components/ControlWithButtons/ui/ControlWithButtons";
import ControlWithButtonsVM from "./components/ControlWithButtons/viewModel/vm";

function App() {

  return (
    <div className="app">
      <div className="testContainer">
        <ControlWithButtons buttons={buttonsFirstTest} />
        <ControlWithButtons buttons={buttonsSecondTest} />
      </div>
      <div className="testContainer">
        <Autocomplete maxSuggestions={3} />
        <Autocomplete maxSuggestions={10} />
      </div>
    </div>
  )
}

export default App;

const buttonsFirstTest: IControlButton[] = [
  {
    text: "Clear",
    onClick: (vm: ControlWithButtonsVM) => vm.setInputValue(""),
    side: "right",
  },
  {
    text: "Hello World!",
    onClick: (vm: ControlWithButtonsVM) => vm.setInputValue("Hello World!"),
    side: "right",
  }
];

const buttonsSecondTest: IControlButton[] = [
  {
    text: "Click me",
    onClick: (vm: ControlWithButtonsVM) => {
      if (isNaN(+vm.inputValue) || !vm.inputValue) {
        return;
      }

      alert(vm.inputValue);
    },
    side: "left",
  },
  {
    text: "Click me",
    onClick: (vm: ControlWithButtonsVM) => {
      alert(vm.inputValue);
    },
    side: "right",
  }
]
