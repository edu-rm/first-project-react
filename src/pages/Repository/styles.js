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

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li{
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li{
      margin-top: 40px;
    }

    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div{
      flex:1;
      margin-left: 15px;
      position: relative;

      strong{
        font-size: 16px;


        a{
          text-decoration: none;
          color: #222;
        }
        a:hover{
          color: #004DA5;
        }

        div{
          position: absolute;
          top:-30px;
          right: 0;
          display:flex;
          flex-wrap: wrap;

          span{
            margin-right:40px;
            color: #eef;
            background-color: #004DA5;
            padding: 3px 6px;
            border-radius: 4px;
          }
        }


      }

      p{
        margin-top: 5px;
        font-size: 12px;
        color:#777;
      }
    }
  }
`;
