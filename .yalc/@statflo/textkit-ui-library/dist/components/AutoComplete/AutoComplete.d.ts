/// <reference types="react" />
export declare type AutoCompleteOption = {
    id: string | number;
    disabled?: boolean;
    label: string;
    value?: string;
    options?: AutoCompleteOption[];
};
interface Props {
    openTop?: boolean;
    options: AutoCompleteOption[];
    placeholder?: string;
    selected?: AutoCompleteOption;
    onChange: (option: AutoCompleteOption) => void;
}
export default function AutoComplete({ openTop, options, placeholder, selected, onChange, }: Props): JSX.Element;
export {};
