import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import IconClear from "../Icon/IconClear";
import IconEye from "../Icon/IconEye";
import IconEyeClose from "../Icon/IconEyeClose";

type Props = TextFieldProps & {
  className?: string;
  clear?: boolean;
};

export default function MuiInput({
  className: className,
  clear,
  type,
  ...rest
}: Props) {
  // input value length check
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  // input password text show toggle
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <TextField
        value={value}
        className={className}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type === "password" && show ? "text" : type}
        InputProps={{
          endAdornment:
            type === "password" && value ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleShow}>
                  {show ? <IconEyeClose /> : <IconEye />}
                </IconButton>
              </InputAdornment>
            ) : (
              value &&
              clear && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClear}>
                    <IconClear />
                  </IconButton>
                </InputAdornment>
              )
            ),
        }}
        {...rest}
      />
    </>
  );
}
