/// <reference types="react" />
import 'react-datepicker/dist/react-datepicker.css';
interface Props {
    format?: string;
    id: string;
    label?: string;
    placeholder?: string;
    selectedDate?: Date;
    shortDays?: boolean;
    showTimeSelect?: boolean;
    onDateChange: (Date: Date | null) => void;
}
export default function DatePicker({ format, id, label, placeholder, selectedDate, shortDays, showTimeSelect, onDateChange, }: Props): JSX.Element;
export {};
