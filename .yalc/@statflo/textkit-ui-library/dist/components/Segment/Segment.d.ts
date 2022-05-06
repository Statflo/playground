/// <reference types="react" />
interface Props {
    activeIndex?: number;
    items: string[];
    onChange: (name: string, index: number) => void;
}
export default function Segment({ activeIndex, items, onChange }: Props): JSX.Element;
export {};
