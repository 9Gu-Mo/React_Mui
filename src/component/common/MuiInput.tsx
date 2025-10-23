import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import IconClear from "../Icon/IconClear";

type Props = TextFieldProps & {
  className?: string;
};

export default function MuiInput({ className: className, ...rest }: Props) {
  const [value, setValue] = useState("");

  return (
    <>
      <TextField
        value={value}
        className={className}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        InputProps={{
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setValue("")}>
                <IconClear />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </>
  );
}
