import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { useState } from "react";

export default function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  .perfil-foto {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: #570060;
  background-image: url(${({ bg }) => bg});
  height: 230px;
  width: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img
          className="perfil-foto"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ valorDoFiltro, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const setValueNormalized = valorDoFiltro.toLowerCase();
                  return titleNormalized.includes(setValueNormalized);
                })
                .map((video) => {
                  return (
                    <a href={`/${video.slug}`} key={video.slug}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
