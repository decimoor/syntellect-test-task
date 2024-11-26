import { useEffect, useState } from "react";
import "./DropdownStyles.css";

export interface IDropdownItem {
    flag: string;
    name: string;
    fullName: string;
}

interface DropdownWrapperProps {
    children: React.ReactNode;
    open: boolean;
    data: IDropdownItem[];
    onSelect: (item: IDropdownItem) => void;
}

interface DropdownItemProps extends IDropdownItem {
    onClick: () => void;
}


export function DropdownWrapper({ children, open, data, onSelect }: DropdownWrapperProps) {

    const [dropdownClasses, setDropdownClasses] = useState("closed dropdownWrapper");


    useEffect(() => {
        if (open) {
            setDropdownClasses(prevState => prevState.replace("closed", "open"));
        } else {
            setDropdownClasses(prevState => prevState.replace("open", "closed"));
        }
    }, [open])

    return (

        <div className="dropdownContainer">
            {children}
            <div className={dropdownClasses}>
                {data.map((item, index) => {
                    return <DropdownItem {...item} key={index} onClick={() => onSelect(item)} />
                })}
            </div>
        </div>
    )
}



export function DropdownItem({ flag, name, fullName, onClick }: DropdownItemProps) {
    return (
        <div className="dropdownItem" onClick={onClick}>
            <span>{name}</span>
            <span>{fullName}</span>
            <img width={30} height={20} src={flag} alt="flag" />
        </div>
    )
}

