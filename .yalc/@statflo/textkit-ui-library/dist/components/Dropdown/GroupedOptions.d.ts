/// <reference types="react" />
import { DropdownOption } from './Dropdown';
interface Props {
    group: DropdownOption;
    selectedOption?: DropdownOption;
}
export default function GroupedOptions({ group, selectedOption }: Props): JSX.Element;
export {};
