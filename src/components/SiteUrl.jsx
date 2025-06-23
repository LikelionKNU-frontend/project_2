import styled from "styled-components";

const SiteUrleBox = styled.div`
  margin-top: 64px;
  margin-left: 60px;

  .url_box {
    padding-top: 8px;
    display: flex;
    gap: 8px;
  }

  .url_box a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #a0b9f5;
  }

  .url_box p {
    margin: 0;
  }

  .url_box b {
    color: #a0b9f5;
  }
`;

const H1 = styled.h1`
  width: 1320px;
  border-bottom: 3px solid #a0b9f5;
  padding-bottom: 8px;
  margin: 0;
`;

function SiteUrl({ homeUrl, redditUrl }) {
  return (
    <SiteUrleBox>
      <H1>Site</H1>
      <div className="url_box">
        {homeUrl ? (
          <a href="{homeUrl}" target="_blank">
            Homepae : {homeUrl}
          </a>
        ) : (
          <p>there is no Homepage...</p>
        )}
        <b>||</b>
        <a href="{redditUrl}">Reddit : {redditUrl}</a>
      </div>
    </SiteUrleBox>
  );
}

export default SiteUrl;
