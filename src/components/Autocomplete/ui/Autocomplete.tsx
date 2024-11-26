// mobx tools
import { observer, useLocalObservable } from "mobx-react-lite";

// ui
import { DropdownWrapper } from "../../../ui/Dropdown/Dropdown";
import Input from "../../../ui/Input/Input";

// view models
import AutocompleteVM from "../viewModel/vm";

interface AutocompleteProps {
    maxSuggestions?: number;
}

export default observer(function Autocomplete({ maxSuggestions = 3 }: AutocompleteProps) {
    const vm = useLocalObservable(() => new AutocompleteVM(maxSuggestions));

    return (
        <DropdownWrapper
            open={vm.isOpen}
            data={vm.suggestions}
            onSelect={vm.selectItem}
        >
            <Input
                className="autocomplete"
                value={vm.inputValue}
                onChange={(e) => vm.setInputValue(e.target.value)}
                onBlur={() => vm.setOpen(false)}
                onFocus={() => vm.setOpen(true)}
                label="Autocomplete"
            />
        </DropdownWrapper>
    );
});
