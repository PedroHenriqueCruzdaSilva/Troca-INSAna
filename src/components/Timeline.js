import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 350px;
    height: 350px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: calc(100px + 5px);
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        margin-bottom: 10px;
        border: 1px #000 dashed;
        width: 302px;
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 300px;
          border-bottom: 1px #000 dashed;
        }
        span {
          padding-top: 8px;
          display: block;
          font-size: 24px;
          padding: 10px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
    div::-webkit-scrollbar {
      background-color: rgb(0, 0, 0, 0.32);
      width: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    div::-webkit-scrollbar-thumb {
      background-color: #000;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
`;