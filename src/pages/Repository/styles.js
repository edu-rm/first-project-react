import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 130px;
    border-radius: 50%;
    margin-top: 30px;
  }

  h1{
    font-size: 24px;
    margin-top: 12px;
  }

  p{
    margin-top: 8px;
    font-size: 14px;
    color: #222;
    line-height:1.4;
    text-align: center;
    max-width: 400px
  }

`;
