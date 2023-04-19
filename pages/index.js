import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { useEffect, useState } from "react";
// import { createClient } from '@supabase/supabase-js'
import { videoService } from "../src/services/videosService";
const service = videoService();

//const PROJECT_URL = "https://jkqecgkaxjgokqbrxyca.supabase.co";
//const PROJECT_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWVjZ2theGpnb2txYnJ4eWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDAzMjQsImV4cCI6MTk5NzQxNjMyNH0.tQjw3aO93jl_-BQfCZ6DutzVMoMxsh3AWJOLj2pZB3c"
//const supabase = createClient(PROJECT_URL, PROJECT_API_KEY)

// Adicione isso antes da função HomePage

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = React.useState({});
  /* const playlists = {
    "Camisas": [],
    "Calças": [],
    "Shorts": [],
    "Meias": [],
    "Blusas": [],
    "Tênis": []
  } */

  React.useEffect(() => {
    //console.log("useEffect");
    service.getAllVideos().then((dados) => {
      //console.log(dados.data);
      // Forma imutavel
      const novasPlaylists = {};
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist])
          novasPlaylists[video.playlist] = [];
        novasPlaylists[video.playlist] = [
          video,
          ...novasPlaylists[video.playlist],
        ];
      });

      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline valorDoFiltro={valorDoFiltro} playlists={playlists} />
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

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
  margin-top: 55px;
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

const StyledDivV = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 600px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.backgroundItem};
  padding: 16px;
  z-index: 1;
  border-radius: 8px;
  button {
    position: absolute;
    top: 0px;
    right: 2.5px;
    border: none;
    background-color: transparent;
    background-color: transparent;
    font-size: 15px;
    color: ${({ theme }) => theme.textColorBase};
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: red;
  }
  img {
    width: 100%;
    height: 90%;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  .infoD {
    padding: 20px;
    h3 {
      font-size: 25px;
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      height: 25px;
    }
  }
`;

const StyleDivVV = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Timeline({ valorDoFiltro, ...props }) {
  const [divVisivel, setDivVisivel] = useState(false);
  const playlistNames = Object.keys(props.playlists);
  const [produto, setProduto] = useState(null);
  // const [exibirComponente, setExibirComponente] = useState(false);
  // const playlistNames = props.playlists?.length > 0 ? Object.keys(props.playlists) : [];

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <>
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
                      <React.Fragment key={video.id}>
                        <a
                          onClick={() => {
                            setDivVisivel(true);
                            setProduto(video);
                          }}
                        >
                          <img src={video.thumb} />
                          <span>{video.title}</span>
                        </a>
                      </React.Fragment>
                    );
                  })}
              </div>
            </section>
            {divVisivel && produto && playlistName === produto.playlist && (
              <StyleDivVV>
                <StyledDivV>
                  <button
                    className="close-modal"
                    onClick={() => setProduto(null)}
                  >
                    X
                  </button>
                  <img src={produto.thumb} />
                  <div className="infoD">
                    <h3>{produto.title}</h3>
                    <p>{produto.desc}</p>
                    <p>{produto.email}</p>
                  </div>
                </StyledDivV>
              </StyleDivVV>
            )}
          </>
        );
      })}
    </StyledTimeline>
  );
}
