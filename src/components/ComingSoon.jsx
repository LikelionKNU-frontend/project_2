import { FaTools } from "react-icons/fa";
import styled from "styled-components";

const ComingSoonWrap = styled.div`
  width: 100%;
  height: 1041px;
`;

const ComingSoongBox = styled.div`
  padding-top: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  h2 {
    font-size: 1.8rem;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;

function ComingSoon() {
  return (
    <ComingSoonWrap>
      <ComingSoongBox>
        <FaTools size={100} color="#555" />
        <h2>Coming Soon</h2>
        <p>This page is under construction.</p>
      </ComingSoongBox>
    </ComingSoonWrap>
  );
}

export default ComingSoon;
