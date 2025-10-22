import { Box, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiButton from "../common/MuiButton";
import MuiInput from "../common/MuiInput";

const FormContainer = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 0,
}));

const Input = styled(TextField)(() => ({
  "& .MuiInputBase-root fieldset": {
    borderColor: "red",
  },
}));
export default function MuiForm() {
  return (
    <>
      <FormContainer>
        <Input placeholder="styled 컴포넌트" />
        <input type="text" id="inp1" name="inp1" placeholder="mui 테스트" />
      </FormContainer>

      <Box sx={{ p: 1, border: `1px dashed`, borderColor: "primary.main" }}>
        테스트
      </Box>

      <MuiButton sx={{ px: 3, py: 2 }} variant="ghost">
        공통 버튼1
      </MuiButton>

      <MuiInput id="text01" placeholder="text" label="text" />
    </>
  );
}
