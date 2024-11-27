import { makeAutoObservable, runInAction } from "mobx";

export default class ControlWithButtonsVM {
  inputValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = (value: string) => {
    runInAction(() => {
      this.inputValue = value;
    });
  };
}
