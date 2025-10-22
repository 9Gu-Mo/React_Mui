import { TextField, type TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  class?: string;
};

export default function MuiInput({ class: className, ...rest }: Props) {
  return (
    <>
      <TextField className={className} {...rest} />
    </>
  );
}
