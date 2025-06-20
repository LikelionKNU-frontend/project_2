import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const LoadingWrap = styled.div`
  width: 100%;
  height: 1041px;
`;

const LoadingBox = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  b {
    padding-left: 16px;
  }
`;

function Loading() {
  return (
    <LoadingWrap>
      <LoadingBox>
        <FadeLoader
          color="#79dbee"
          height={40}
          margin={20}
          radius={2}
          speedMultiplier={0.8}
          width={10}
        />
        <b>page is loading....</b>
      </LoadingBox>
    </LoadingWrap>
  );
}

export default Loading;
