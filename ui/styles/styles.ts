import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const ActivityLabel = styled.div`
  display: flex;
  margin: 16px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActivityTitle = styled.h2`
  font-family: Gilroy, Arial, sans-serif;
  color: white;
  @media (min-width: 768px) {
    width: 20%;
  }

  font-size: 20px;
`;

export const ActivityData = styled.p`
  font-family: Gilroy, Arial, sans-serif;
  color: white;
  font-size: 20px;
  display: flex;
`;

export const Button = styled.button`
  background-color: rgb(120, 44, 73);
  color: rgb(255, 253, 221);
  padding: 16px 28px;
  border-radius: 8px;
  border: none;
  display: block;
  margin: 16px auto;
`;

export const ErrorMessage = styled.h2`
  color: rgb(248, 230, 200);
  text-align: center;
  margin-top: 8px;
  font-family: Gilroy, Arial, sans-serif;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
  min-height: 100vh;
  border: none;
  color: rgb(248, 230, 200);
  h1 {
    color: rgb(248, 230, 200);
  }
  background-color: #2c0735;
  max-width: 100vw;
  &&& > form {
    font-family: Gilroy, Arial, sans-serif;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: white;
  font-family: Gilroy, Arial, sans-serif;
  margin: 48px 0px 16px;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;

  > select,
  input {
    margin: 8px 0px 16px;
  }
`;
