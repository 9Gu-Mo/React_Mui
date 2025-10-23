import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  class?: string;
  sx?: ButtonProps["sx"];
  variant?: ButtonProps["variant"];
}

export default function MuiButton(props: Props) {
  return (
    <>
      <Button
        className={props.class}
        variant={props.variant}
        sx={props.sx}
        href={props.href}
      >
        {props.children}
      </Button>
    </>
  );
}
