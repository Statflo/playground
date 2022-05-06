/// <reference types="react" />
export declare type DropdownOption = {
    id: string | number;
    disabled?: boolean;
    label: string;
    value?: string;
    options?: DropdownOption[];
};
interface Props {
    openTop?: boolean;
    options: DropdownOption[];
    placeholder?: string;
    selected?: DropdownOption;
    onChange: (option: DropdownOption) => void;
}
export default function Dropdown({ openTop, options, placeholder, selected, onChange, }: Props): JSX.Element;
export {};
