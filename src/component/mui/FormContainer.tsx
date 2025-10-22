import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { excludeProps } from "../../utils/shouldForwardProp";

interface Props {
  maxWidth?: number;
  centered?: boolean;
}

export const FormContainer = styled(Paper, {
  shouldForwardProp: excludeProps("maxWidth", "centered"),
})<Props>(({ theme, maxWidth, centered }) => ({
  maxWidth: maxWidth || 480,
  margin: centered ? "80px auto" : theme.spacing(4),
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 0,
  boxShadow: theme.shadows[4],
}));
