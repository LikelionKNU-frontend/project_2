import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const LoadingWrap = styled.div`
  width: 100%;
  height: 1041px;
`;

const LoadingBox = styled.div`
  padding-top: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  h2 {
    padding-left: 16px;
    font-size: 1.8rem;
  }
`;

function Loading() {
  return (
    <LoadingWrap>
      <LoadingBox>
        <FadeLoader
          color="#79dbee"
          height={50}
          margin={30}
          radius={2}
          speedMultiplier={0.8}
          width={10}
        />
        <h2>Page is loading....</h2>
      </LoadingBox>
    </LoadingWrap>
  );
}

export default Loading;
