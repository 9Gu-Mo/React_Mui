import { Radio, type RadioProps } from "@mui/material";

type Props = RadioProps & {
  className?: string;
}

export default function MuiRadio({...rest}: Props) {
  return (
    <>
      <Radio {...rest} />
    </>
  )
}