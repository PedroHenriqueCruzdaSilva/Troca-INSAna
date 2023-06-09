import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { useEffect, useState } from "react";
// import { createClient } from '@supabase/supabase-js'
import { videoService } from "../src/services/videosService";
import { createClient } from "@supabase/supabase-js";

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
    <div className="Page">
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline valorDoFiltro={valorDoFiltro} playlists={playlists} />
    </div>
  );
}

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 100%;
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
  background-repeat: no-repeat;
  height: 230px;
  width: 100%;
  margin-top: 55px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      {/*<section className="user-info">
        <img
          className="perfil-foto"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>*/}
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
  .close-modal {
    position: absolute;
    top: 0px;
    right: 2.5px;
    border: none;
    background-color: transparent;
    font-size: 15px;
    color: ${({ theme }) => theme.textColorBase};
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
  .close-modal:hover {
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
      color: ${({ theme }) => theme.textColorBase};
    }
    p {
      margin-top: 10px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.textColorBase};
    }
    form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      input {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        height: 25px;
        border-radius: 2px;
        border: 3px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
      }
      .deletar {
        background-color: ${({ theme }) => theme.deletarColorBackground};
        padding: 8px 16px;
        border: none;
        font-weight: bold;
        font-size: 15px;
        border-radius: 2px;
        color: ${({ theme }) => theme.textColorButton};
        cursor: pointer;
        margin-top: 7.5px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    img {
      width: 85%;
      height: 55%;
      margin-bottom: -20px
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

const PROJECT_URL = "https://jkqecgkaxjgokqbrxyca.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWVjZ2theGpnb2txYnJ4eWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDAzMjQsImV4cCI6MTk5NzQxNjMyNH0.tQjw3aO93jl_-BQfCZ6DutzVMoMxsh3AWJOLj2pZB3c";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


function Timeline({ valorDoFiltro, ...props }) {
  const [divVisivel, setDivVisivel] = useState(false);
  const playlistNames = Object.keys(props.playlists);
  const [produto, setProduto] = useState(null);
  const [senha, setSenha] = useState("");
  // const [exibirComponente, setExibirComponente] = useState(false);
  // const playlistNames = props.playlists?.length > 0 ? Object.keys(props.playlists) : [];

  function deleteVideo() {
    const { error } = supabase.from("itens").delete().eq("id", produto.id);
      if(error){
        console.log(error.message)
      }
  }

  return (
    <StyledTimeline>
      {
      playlistNames.map((playlistName) => {
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
                        {video.admC == "S" && (
                          <a
                            onClick={() => {
                              setDivVisivel(true);
                              setProduto(video);
                            }}
                          >
                            <img src={video.thumb} />
                            <span>{video.title}</span>
                          </a>
                        )
                      }
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
                    <form onSubmit={(e) => {
                        if(senha == produto.password){
                          deleteVideo()
                        } else {
                          alert("Senha incorreta")
                          e.preventDefault()
                          e.stopPropagation()
                          setSenha("")
                          setProduto(null)
                          setDivVisivel(false)
                          return false;
                        }
                      }}>
                        <label>Insira a senha para deletar o item (caso a esqueça mande uma mensagem com o email que você colocou no produto para o email: )</label>
                        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button type="submit" className="deletar">Deletar</button>
                    </form>
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
