import { TextareaAutosize } from "@mui/material";

type Props = {
    minRows?: string
    maxRows?: string
    placeholder?: string
    style?: React.CSSProperties
    onchange: (val: any) => void
    value: string
    name: string
};

const TextAreaComponent: React.FC<Props> = ({
    minRows,
    maxRows,
    placeholder,
    onchange,
    style,
    value,
    name
}) => {
    return (
        <TextareaAutosize
            name={name}
            maxRows={maxRows}
            minRows={minRows}
            placeholder={placeholder}
            onChange={onchange}
            style={style}
            value={value}
        />
    );
};

export default TextAreaComponent;