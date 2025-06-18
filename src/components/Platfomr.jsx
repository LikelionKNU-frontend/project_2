import "./Platform.css";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
  FaGlobe,
} from "react-icons/fa";
import {
  SiNintendoswitch,
  SiIos,
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

function Platform({ platforms }) {
  return (
    <div className="platform">
      <h1>플랫폼</h1>
      <div className="game_platforms">
        <div className="platform_icon_list">
          {platforms?.map((p) => (
            <div className="platform_icon">
              <div key={p.platform.id} className={p.platform.name}>
                {platformIcons[p.platform.name]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Platform;
