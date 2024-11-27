import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../../../api/apiService";

export default class AutocompleteVM {
  inputValue: string = "";
  suggestions: CountryInfo[] = [];
  isOpen: boolean = false;
  maxSuggestions: number;
  private debounceTimeout: NodeJS.Timeout | null = null;

  constructor(maxSuggestions: number = 3) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  setInputValue = (value: string) => {
    runInAction(() => {
      this.inputValue = value;
      this.debouncedFetch();
    });
  };

  setOpen = (value: boolean) => {
    runInAction(() => {
      this.isOpen = value;
    });
  };

  private debouncedFetch = () => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.fetchSuggestions();
    }, 300);
  };

  private fetchSuggestions = async () => {
    if (!this.inputValue) {
      runInAction(() => {
        this.suggestions = [];
      });
      return;
    }

    const results = await getCountryByName(this.inputValue);
    runInAction(() => {
      const uniqueResults = results.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (t) => t.name === item.name && t.fullName === item.fullName
          )
      );
      this.suggestions = uniqueResults.slice(0, this.maxSuggestions);
    });
  };

  selectItem = (item: CountryInfo) => {
    runInAction(() => {
      this.inputValue = item.name;
      this.isOpen = false;
    });
  };
}
