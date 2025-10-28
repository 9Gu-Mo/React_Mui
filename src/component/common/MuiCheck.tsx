import { Checkbox, type CheckboxProps } from "@mui/material";

type Props = CheckboxProps & {
  className?: string;
};

export default function MuiCheck({ ...rest }: Props) {
  return (
    <>
      <Checkbox {...rest} />
    </>
  );
}
