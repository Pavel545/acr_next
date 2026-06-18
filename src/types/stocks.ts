
type CSSVariables = {
    '--colS'?: number;
    '--colEnd'?: number;
    '--rowS'?: number;
    '--rowEnd'?: number;
};
export interface Stocks {
    id: string;
    cat: string;
    title: string;
    style?: React.CSSProperties & CSSVariables;
    imgPrev?: string;
    imgBig?: string;
    discription: string[];
}