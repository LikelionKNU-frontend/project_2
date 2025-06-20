import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import rawg_api from "../assets/rawg_api.png";

import {
  SiReact,
  SiReactrouter,
  SiStyledcomponents,
  SiAxios,
} from "react-icons/si";

const StackWrap = styled.div`
  width: 100%;
  height: 1041px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StackList = styled.div`
  display: flex;
  gap: 48px;
  margin: 0 auto;

  div {
    display: grid;
    text-align: center;
  }
`;

const H1 = styled.h1`
  padding-top: 80px;
  font-size: 80px;
`;

const B = styled.b`
  font-size: 24px;
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
`;

function ShowStack() {
  return (
    <div>
      <Nav />
      <StackWrap>
        <H1>Built With</H1>
        <StackList>
          <div className="react">
            <SiReact size={160} color="#61DAFB" title="React" />
            <B>React</B>
          </div>
          <div className="react_router">
            <SiReactrouter size={160} color="#CA4245" title="React_Router" />
            <B>React Router</B>
          </div>
          <div className="styled">
            <SiStyledcomponents
              size={160}
              color="#DB7093"
              title="Styled_Components"
            />
            <B>Styled-Component</B>
          </div>
          <div className="rawg_api">
            <Img src={rawg_api}></Img>
            <B>RAWG API</B>
          </div>
          <div className="axios">
            <SiAxios size={160} color="#5A29E4" title="Axios" />
            <B>Axios</B>
          </div>
        </StackList>
      </StackWrap>
      <Footer />
    </div>
  );
}

export default ShowStack;
