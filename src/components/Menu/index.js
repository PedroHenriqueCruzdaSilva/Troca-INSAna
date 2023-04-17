import styled from "styled-components";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch";
import RegisterVideo from "../RegisterVideo";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border-bottom: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
      <RegisterVideo />
      <DarkModeSwitch />
    </StyledMenu>
  );
}

const SvgTheme = styled.div`
  .pathB {
    fill: ${({ theme }) => theme.svgT};
  }
`;

function Logo() {
  return (
    <SvgTheme>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="180.000000pt"
        height="40.000000pt"
        viewBox="0 0 180.000000 40.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            className="pathB"
            d="M102 326 c-31 -15 -58 -29 -60 -31 -1 -1 4 -18 13 -38 11 -28 19 -34
35 -30 19 5 20 1 20 -91 l0 -96 105 0 105 0 0 96 c0 92 1 96 20 91 16 -4 24 2
35 30 9 20 14 37 13 38 -2 2 -28 15 -58 30 -78 39 -151 40 -228 1z m142 3 c-7
-12 -51 -12 -58 0 -3 5 10 9 29 9 19 0 32 -4 29 -9z m15 -83 c9 -10 7 -17 -5
-27 -13 -11 -17 -10 -26 5 -9 16 -11 16 -21 2 -15 -20 -43 -5 -34 18 8 20 70
22 86 2z m-76 -50 c3 -7 0 -19 -6 -25 -8 -8 -5 -11 11 -11 16 0 22 -6 22 -21
0 -15 -5 -20 -22 -17 -26 3 -51 48 -42 72 8 20 30 21 37 2z m101 -2 c9 -24
-16 -69 -38 -69 -27 0 -32 25 -7 32 11 3 18 9 15 15 -7 12 3 38 15 38 5 0 12
-7 15 -16z"
          />
          <path
            className="pathB"
            d="M477 263 c-13 -12 -7 -23 13 -23 18 0 20 -7 20 -55 0 -42 3 -55 15
-55 12 0 15 13 15 55 0 42 3 55 15 55 8 0 15 7 15 15 0 11 -11 15 -43 15 -24
0 -47 -3 -50 -7z"
          />
          <path
            d="M1292 259 c-31 -12 -27 -44 8 -69 34 -24 30 -44 -6 -37 -16 3 -24 0
-24 -9 0 -14 36 -19 64 -8 25 10 19 51 -9 70 -14 9 -25 20 -25 25 0 5 11 9 25
9 14 0 25 4 25 9 0 13 -33 19 -58 10z"
            fill="rgb(0, 74, 173)"
          />
          <path
            d="M1060 195 c0 -51 3 -65 15 -65 12 0 15 14 15 65 0 51 -3 65 -15 65
-12 0 -15 -14 -15 -65z"
            fill="rgb(0, 74, 173)"
          />
          <path
            d="M1120 195 c0 -53 3 -65 16 -65 13 0 15 9 12 50 -3 49 -3 49 14 27 10
-12 23 -34 29 -49 7 -17 19 -28 30 -28 17 0 19 8 19 65 0 75 -17 89 -22 18
l-3 -48 -28 48 c-18 30 -35 47 -47 47 -18 0 -20 -7 -20 -65z"
            fill="rgb(0, 74, 173)"
          />
          <path
            d="M1407 253 c-2 -5 -12 -32 -22 -61 -18 -55 -13 -80 9 -49 16 21 66 23
66 2 0 -8 7 -15 16 -15 9 0 14 6 12 13 -3 6 -13 36 -23 65 -13 36 -24 52 -36
52 -10 0 -20 -3 -22 -7z m33 -49 c0 -15 -6 -24 -15 -24 -17 0 -18 4 -9 37 8
29 24 20 24 -13z"
            fill="rgb(0, 74, 173)"
          />
          <path
            className="pathB"
            d="M703 230 c-44 -17 -41 -85 4 -96 37 -10 58 7 58 46 0 39 -29 63 -62
50z m35 -47 c-3 -30 -25 -42 -34 -19 -9 22 2 46 21 46 12 0 15 -8 13 -27z"
          />
          <path
            className="pathB"
            d="M819 226 c-27 -13 -37 -59 -18 -82 15 -18 69 -19 69 -1 0 8 -10 13
-22 13 -18 -1 -24 5 -26 27 -3 23 0 27 22 27 14 0 26 4 26 9 0 16 -26 20 -51
7z"
          />
          <path
            className="pathB"
            d="M918 232 c-27 -5 -21 -22 7 -22 34 0 32 -18 -2 -22 -22 -2 -28 -8
-28 -28 0 -23 4 -25 43 -26 l43 -1 -3 45 c-3 47 -21 63 -60 54z m32 -61 c0
-12 -20 -25 -27 -18 -7 7 6 27 18 27 5 0 9 -4 9 -9z"
          />
          <path
            className="pathB"
            d="M1550 230 c-7 -4 -19 -6 -27 -3 -10 4 -13 -7 -13 -46 0 -39 4 -51 15
-51 11 0 15 11 15 40 0 29 4 40 15 40 11 0 15 -11 15 -40 0 -29 4 -40 15 -40
23 0 21 86 -3 99 -10 5 -24 6 -32 1z"
          />
          <path
            className="pathB"
            d="M1658 232 c-27 -5 -21 -22 7 -22 34 0 32 -18 -2 -22 -22 -2 -28 -8
-28 -28 0 -23 4 -25 43 -26 42 -1 42 -1 42 35 0 52 -21 73 -62 63z m30 -64
c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z"
          />
          <path
            className="pathB"
            d="M590 179 c0 -37 4 -49 15 -49 11 0 15 11 15 36 0 27 5 37 20 41 32 8
23 21 -15 21 l-35 0 0 -49z"
          />
        </g>
      </svg>
    </SvgTheme>
  );
}
