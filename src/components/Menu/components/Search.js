import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  margin-right: -230px;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 768px) {
      width: 64px;
      height: 40px;
    }
  }
  @media (max-width: 768px) {
    border: none;
    input {
      width: 62%;
      padding: none;
      height: 40px;
      border: none;
    }
    button {
      display: none;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  //    const [search, setSearch] = React.useState("");
  const search = valorDoFiltro;
  const setSearch = setValorDoFiltro;
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
