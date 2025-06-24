import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorWrap = styled.div`
  width: 100%;
  height: 1041px;
`;

const ErrorBox = styled.div`
  padding-top: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  h2 {
    color: #cf1322;
    font-size: 1.8rem;
    margin: 0;
  }
  p {
    color: #cf1322;
    font-size: 1.2rem;
    text-align: center;
    max-width: 500px;
    margin: 0;
  }
`;

function Error() {
  return (
    <ErrorWrap>
      <ErrorBox>
        <FaExclamationTriangle color="#cf1322" size={100} />
        <h2>Something went wrong</h2>
        <p>We couldn’t load the page. Please try again later.</p>
      </ErrorBox>
    </ErrorWrap>
  );
}

export default Error;
