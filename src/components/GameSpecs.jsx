import styled from "styled-components";
import requirements from "../api/requirements.json";

const GameSpecBox = styled.div`
  margin-top: 64px;
  margin-left: 60px;
`;

const H1 = styled.h1`
  width: 1320px;
  border-bottom: 3px solid #a0b9f5;
  padding-bottom: 8px;
  margin: 0;
`;

const GameSpecList = styled.div`
  display: flex;
  gap: 40px;
`;

const H2 = styled.h2`
  border-bottom: 1px solid #a0b9f5;
  margin: 0;
  padding-top: 8px;
  padding-bottom: 4px;
`;

const SpecList = styled.div`
  padding-top: 10px;
`;

function GameSpecs({ slug }) {
  const spec = requirements[slug];

  return (
    <GameSpecBox>
      <H1>PC Requirements</H1>
      <GameSpecList>
        <div className="minimum">
          <H2>Minimum</H2>
          {spec?.minimum && (
            <SpecList>
              <div>OS : {spec.minimum.os}</div>
              <div>CPU : {spec.minimum.cpu}</div>
              <div>RAM : {spec.minimum.ram}</div>
              <div>GPU : {spec.minimum.gpu}</div>
              <div>Storage : {spec.minimum.storage}</div>
            </SpecList>
          )}
        </div>
        <div className="recommended">
          <H2>Recommended</H2>
          {spec?.recommended && (
            <SpecList>
              <div>OS : {spec.recommended.os}</div>
              <div>CPU : {spec.recommended.cpu}</div>
              <div>RAM : {spec.recommended.ram}</div>
              <div>GPU : {spec.recommended.gpu}</div>
              <div>Storage : {spec.recommended.storage}</div>
            </SpecList>
          )}
        </div>
      </GameSpecList>
    </GameSpecBox>
  );
}

export default GameSpecs;
