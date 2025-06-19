import styled from "styled-components";
import "./Platform.css";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import {
  SiNintendoswitch,
  SiMacos,
  SiPlaystation5,
  SiPlaystation3,
  SiPlaystationvita,
} from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";

const platformIcons = {
  PC: <FaWindows />,
  "PlayStation 5": <SiPlaystation5 />,
  "PlayStation 4": <FaPlaystation />,
  "PlayStation 3": <SiPlaystation3 />,
  "PS Vita": <SiPlaystationvita />,
  "Xbox Series S/X": <FaXbox />,
  "Xbox One": <FaXbox />,
  "Xbox 360": <FaXbox />,
  "Nintendo Switch": <SiNintendoswitch />,
  "Nintendo 3DS": <BsNintendoSwitch />,
  "Nintendo DS": <BsNintendoSwitch />,
  "Wii U": <FaGlobe />,
  Wii: <FaGlobe />,
  GameCube: <FaGlobe />,
  iOS: <MdPhoneIphone />,
  Android: <FaAndroid />,
  macOS: <SiMacos />,
  Linux: <FaLinux />,
  Web: <FaGlobe />,
};

const PlatformBox = styled.div`
  margin-top: 58px;
  margin-left: 60px;

  svg {
    height: 50px;
    width: 50px;
    padding: 4px;
  }
`;

const H1 = styled.h1`
  width: 1320px;
  border-bottom: 3px solid #a0b9f5;
  padding-bottom: 8px;
`;

const PlatformIconList = styled.div`
  display: flex;
  gap: 16px;
`;

const PlatformIcon = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #a0b9f5;
  p {
    font-size: 10px;
  }
`;

function Platform({ platforms }) {
  return (
    <PlatformBox>
      <H1>플랫폼</H1>
      <PlatformIconList>
        {platforms?.map((p) => (
          <PlatformIcon>
            <div
              key={p.platform.id}
              className="platform_icon"
              data-platform={p.platform.name}
            >
              {platformIcons[p.platform.name]}
              <p>{p.platform.name}</p>
            </div>
          </PlatformIcon>
        ))}
      </PlatformIconList>
    </PlatformBox>
  );
}

export default Platform;
