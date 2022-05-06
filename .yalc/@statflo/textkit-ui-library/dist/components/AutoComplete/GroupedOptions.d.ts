/// <reference types="react" />
import { AutoCompleteOption } from './AutoComplete';
interface Props {
    group: AutoCompleteOption;
    selectedOption?: AutoCompleteOption;
}
export default function GroupedOptions({ group, selectedOption }: Props): JSX.Element;
export {};
