import {
  Box,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import MuiButton from "../common/MuiButton";
import MuiInput from "../common/MuiInput";
import MuiCheck from "../common/MuiCheck";

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
          <Typography>Input(text, password, etc..)</Typography>
          <MuiInput
            id="text01"
            placeholder="text"
            label="text"
            variant="outlined"
            clear
          />
          <MuiInput
            id="password01"
            placeholder="password"
            label="password"
            variant="outlined"
            type="password"
          />
          <MuiInput
            id="number01"
            placeholder="number"
            label="number"
            variant="outlined"
            type="number"
            clear
          />
          <MuiInput
            id="tel01"
            placeholder="tel"
            label="tel"
            variant="outlined"
            type="tel"
            clear
          />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              "& .MuiTextField-root": {
                flex: 1,
              },
            }}
          >
            <MuiInput
              id="text02-1"
              placeholder="text"
              label="text"
              variant="outlined"
            />
            <MuiInput
              id="text02-2"
              placeholder="text"
              label="text"
              variant="outlined"
            />
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Stack>
            <Typography>Check Box(No Label)</Typography>
            <div>
              <MuiCheck />
              <MuiCheck defaultChecked />
              <MuiCheck defaultChecked disabled />
            </div>
          </Stack>

          <Stack>
            <Typography>Check Box</Typography>
            <FormControl
              sx={{
                "& .MuiFormControlLabel-root": {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
            >
              <FormControlLabel control={<MuiCheck />} label="전체" />
              <FormControlLabel control={<MuiCheck />} label="매일두유(저당)" />
              <FormControlLabel
                control={<MuiCheck />}
                label="매일두유(단백질)"
              />
              <FormControlLabel
                control={<MuiCheck />}
                label="매일두유"
                disabled
              />
              <FormControlLabel control={<MuiCheck />} label="기타" />
            </FormControl>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
