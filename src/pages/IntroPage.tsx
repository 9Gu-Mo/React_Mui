import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import MuiButton from "../component/common/MuiButton";
import { useState } from "react";

export default function IntroPage() {
  const [lang, setLang] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setLang(e.target.value as string);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
            transition: "all 0.5s ease-in-out",
            backgroundImage: "url(../../public/bgLeft.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            "&:hover": {
              width: "60%",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, .5)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              width: 480,
              margin: "0 auto",
            }}
          >
            <MuiButton variant="contained" fullWidth>
              설문생성
            </MuiButton>
            <Box
              sx={{
                position: "relative",
                color: "#ffffff",
                marginTop: 2,
              }}
            >
              설문지를 생성하고, 관리할 수 있습니다. 설문 답변에 대한 데이터와
              보고서를 제공하고 신규 제품에 대한 설문 평가를 진행할 수 있습니다.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
            transition: "all 0.5s ease-in-out",
            backgroundImage: "url(../../public/bgRight.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            "&:hover": {
              width: "60%",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, .5)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              width: 480,
              margin: "0 auto",
            }}
          >
            <MuiButton variant="contained" fullWidth>
              설문참여
            </MuiButton>
            <Box
              sx={{
                position: "relative",
                color: "#ffffff",
                marginTop: 2,
              }}
            >
              신규 제품에 대한 테스트를 진행합니다. 유사 제품과 신규 제품을
              비교하고 평가하여 더 나은 제품을 만들기 위한 소중한 정보로
              활용됩니다.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: 120,
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "#ffffff",
              }}
              id="demo-simple-select-label"
            >
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="language"
              onChange={handleChange}
              sx={{
                color: "#ffffff",
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff",
                },
              }}
            >
              <MenuItem value={"한국어"}>korean</MenuItem>
              <MenuItem value={"베트남어"}>Vietnamese</MenuItem>
              <MenuItem value={"영어"}>english</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
