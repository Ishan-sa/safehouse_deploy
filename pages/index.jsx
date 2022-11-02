import NavBar from "../components/Home/NavBar";
import Button from "../components/D3Components/Button/Button";
import Icon from "../components/D3Components/Icon/Icon";
import HomeIcon from "@mui/icons-material/Home";
import LuggageIcon from "@mui/icons-material/Luggage";
import {
  BackgroundContainer,
  MainContainer,
  CenterContainer,
} from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();
  const goToHost = () => {
    r.push("/host");
  };
  const goToEvacuee = () => {
    r.push("/evacuee");
  };

  return (
    <div>
      <BackgroundContainer src="./homeBG.png">
        <CenterContainer>
          <div className="flex gap-10 z-99">
            <div className="flex justify-center items-center flex-col gap-3">
              <HomeIcon style={{ fill: "#f5f5f5" }} sx={{ fontSize: 150 }} />
              <Button href="/host" txt="Host" />
              <AppText
                txt="Apply to become a host"
                color="#f5f5f5"
                fontSize="16px"
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <LuggageIcon style={{ fill: "#f5f5f5" }} sx={{ fontSize: 150 }} />
              <Button href="/userhome" txt="Evacuee" />
              <AppText
                txt="Apply to become a host"
                color="#f5f5f5"
                fontSize="16px"
              />
            </div>
          </div>
        </CenterContainer>
      </BackgroundContainer>
    </div>
  );
}
