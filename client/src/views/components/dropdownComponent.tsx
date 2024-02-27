import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props = {
    name: string
    value: string
    label: string
    onchange: (val: any) => void;
    options?: any;
    style?: React.CSSProperties;
    inputlabel?: string;
    variant?: "filled" | "standard" | "outlined"
    size?: "small" | "medium"
    formsize?: any
};

const DropDown: React.FC<Props> = ({
    label,
    value,
    onchange,
    options,
    name,
    variant,
    style,
    inputlabel,
    size,
    formsize,
}) => {

    return (
        <Box>
            <FormControl sx={{ minWidth: `${formsize}px` }}>
                <InputLabel>{inputlabel}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={onchange}
                    name={name}
                    style={style}
                    variant={variant}
                    size={size}
                >
                    {options.map((item: any, index: any) => (

                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl >
        </Box >
    );

}
export default DropDown;
