import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 35px;
    height: 35px;
    font-size: 24px;
    color: inherit;
    //bottom: 16px;
    margin-right: -106px;
    margin-left: 70px;
    border: 0;
    background-color: rgb(0, 74, 173);
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .preview-imagem {
    width: 100%;
    padding: 20px;
    max-width: 350px;
    align-self: center;
    height: 350px;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    font-weight: bold;
    font-size: 24px;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 520px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  textarea {
    border-radius: 2px;
    border: 3px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  input {
    border-radius: 2px;
    border: 3px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  label {
    margin-bottom: 5px;
  }
`;
