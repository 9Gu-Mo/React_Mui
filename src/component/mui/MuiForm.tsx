import {
  Box,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import MuiButton from "../common/MuiButton";
import MuiInput from "../common/MuiInput";
import MuiCheck from "../common/MuiCheck";
import MuiRadio from "../common/MuiRadio";

// const FormContainer = styled(Box)(({ theme }) => ({
//   borderRadius: Number(theme.shape.borderRadius) * 0,
// }));

// const Input = styled(TextField)(() => ({
//   "& .MuiInputBase-root fieldset": {
//     borderColor: "red",
//   },
// }));
export default function MuiForm() {
  const dummy = [
    {
      value: "설문1",
    },
    {
      value: "설문2",
    },
    {
      value: "설문3",
    },
    {
      value: "설문4",
    },
    {
      value: "설문5",
    },
    {
      value: "설문6",
    },
    {
      value: "설문7",
    },
    {
      value: "설문8",
    },
    {
      value: "설문9",
    },
    {
      value: "설문10",
    },
    {
      value: "설문11",
    },
    {
      value: "설문12",
    },
    {
      value: "설문13",
    },
    {
      value: "설문14",
    },
    {
      value: "설문15",
    },
  ];

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
          maxWidth: "800px",
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
            <Typography>Check Box</Typography>
            <div>
              <MuiCheck />
              <MuiCheck defaultChecked />
              <MuiCheck defaultChecked disabled />
            </div>
          </Stack>

          <Stack>
            <Typography>Check Box(With Label)</Typography>
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

        <Stack
          sx={{
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Stack>
            <Typography>Radio Group</Typography>
            <FormControl
              sx={{
                "& .MuiFormControlLabel-root": {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
            >
              <RadioGroup
                sx={{
                  display: "block",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                }}
              >
                {dummy.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<MuiRadio />}
                    value={item.value}
                    label={index + 1}
                    labelPlacement="bottom"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>

          <Stack>
            <Typography>Radio Group(With Label)</Typography>
            <FormControl
              sx={{
                "& .MuiFormControlLabel-root": {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
            >
              <RadioGroup
                defaultValue="매일두유"
                sx={{
                  flexDirection: "row",
                }}
              >
                <FormControlLabel
                  value="매일두유"
                  control={<MuiRadio />}
                  label="매일두유"
                />
                <FormControlLabel
                  value="매일두유(저당)"
                  control={<MuiRadio />}
                  label="매일두유(저당)"
                />
                <FormControlLabel
                  value="매일두유(단백질)"
                  control={<MuiRadio />}
                  label="매일두유(단백질)"
                  disabled
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
