import { Box, ButtonGroup, Stack, Typography } from "@mui/material";
import MuiButton from "../common/MuiButton";
import MuiInput from "../common/MuiInput";

// const FormContainer = styled(Box)(({ theme }) => ({
//   borderRadius: Number(theme.shape.borderRadius) * 0,
// }));

// const Input = styled(TextField)(() => ({
//   "& .MuiInputBase-root fieldset": {
//     borderColor: "red",
//   },
// }));
export default function MuiForm() {
  return (
    <>
      {/* <FormContainer>
        <Input placeholder="styled 컴포넌트" />
        <input type="text" id="inp1" name="inp1" placeholder="mui 테스트" />
      </FormContainer> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "0 20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Button</Typography>
            <MuiButton variant="soft">soft</MuiButton>
            <MuiButton variant="contained">contained</MuiButton>
            <MuiButton variant="text">text</MuiButton>
            <MuiButton variant="outlined">outlined</MuiButton>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Button Group</Typography>
            <ButtonGroup
              sx={{
                "& .MuiButtonBase-root": {
                  minWidth: 0,
                  flex: 1,
                },
              }}
            >
              <MuiButton variant="soft">soft</MuiButton>
              <MuiButton variant="contained">contained</MuiButton>
            </ButtonGroup>
            <ButtonGroup
              sx={{
                "& .MuiButtonBase-root": {
                  minWidth: 0,
                  flex: 1,
                },
              }}
            >
              <MuiButton variant="soft">soft</MuiButton>
              <MuiButton variant="outlined">outlined</MuiButton>
              <MuiButton variant="contained">contained</MuiButton>
            </ButtonGroup>
            <ButtonGroup
              sx={{
                "& .MuiButtonBase-root": {
                  minWidth: 0,
                  flex: 1,
                },
              }}
            >
              <MuiButton variant="soft">soft</MuiButton>
              <MuiButton variant="outlined">outlined</MuiButton>
              <MuiButton variant="outlined">outlined</MuiButton>
              <MuiButton variant="contained">contained</MuiButton>
            </ButtonGroup>
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography>Input</Typography>
          <MuiInput
            id="text"
            placeholder="text"
            label="text"
            variant="outlined"
          />
          <MuiInput
            id="password"
            placeholder="password"
            label="password"
            variant="outlined"
            type="password"
          />
        </Stack>
      </Box>
    </>
  );
}
