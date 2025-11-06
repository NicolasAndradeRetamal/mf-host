interface ColorPickerProps {
    color: string;
    colorsList: string[];
    handleChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitSaveColor: (e: React.FormEvent<HTMLFormElement>) => void;
}
declare const ColorPicker: ({ color, colorsList, handleChangeColor, handleSubmitSaveColor, }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export default ColorPicker;
