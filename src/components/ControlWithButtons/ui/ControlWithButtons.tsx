
// ui
import Input from "../../../ui/Input/Input";
import Button from "../../../ui/Button/Button";

// styles
import "./ControlWithButtonsStyles.css";

// mobx
import { useLocalObservable, observer } from "mobx-react-lite";

// view models
import ControlWithButtonsVM from "../viewModel/vm";

export interface IControlButton {
    text: string;
    onClick: (vm: ControlWithButtonsVM) => void;
    side: "left" | "right";
}

interface ControlWithButtonsProps {
    buttons: IControlButton[];
}

export default observer(function ControlWithButtons({ buttons }: ControlWithButtonsProps) {

    const vm = useLocalObservable(() => new ControlWithButtonsVM());

    return (
        <div className="controlContainer">
            {buttons.map((button, index) => {
                if (button.side === "left") {
                    return <Button
                        key={index}
                        text={button.text}
                        onClick={() => button.onClick(vm)}
                    />
                }

                return null;
            })}
            <Input
                label="Control with buttons"
                value={vm.inputValue}
                onChange={(e) => vm.setInputValue(e.target.value)}
            />
            {buttons.map((button, index) => {
                if (button.side === "right") {
                    return <Button
                        key={index}
                        text={button.text}
                        onClick={() => button.onClick(vm)}
                    />
                }

                return null;
            })}
        </div>
    )
})