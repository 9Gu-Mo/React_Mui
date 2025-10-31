import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function MuiButton(props: Props) {
  const { children, href, className, sx, variant, ...rest } = props;
  return (
    <Button
      className={className}
      variant={variant}
      sx={sx}
      href={href}
      {...rest}
    >
      {children}
    </Button>
  );
}
