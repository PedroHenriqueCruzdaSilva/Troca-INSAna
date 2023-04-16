import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 30px;
    align-content: center;
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
        width: 302px;
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundP};
        border: 3px solid ${({ theme }) => theme.borderBase};
        img {
          width: 298px;
          border-bottom: 3px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
        }
        span {
          padding-top: 8px;
          display: block;
          font-size: 24px;
          padding: 10px;
          color: ${({ theme }) => theme.textColorP};
          font-weight: bold;
        }
      }
    }
    div::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.scrollBar};
      width: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    div::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scrollBarThumb};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
`;