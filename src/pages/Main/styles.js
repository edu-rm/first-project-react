import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 30px auto;

  h1 {
    font-size: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 18px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #0077b5;
  border: none;
  padding: 0 16px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
