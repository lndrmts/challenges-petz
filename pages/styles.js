import styled from "styled-components";

export const Container = styled.section`
  max-width: 799px;
  margin: auto;
  padding: 32px 20px;
`;

export const Post = styled.article`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin-bottom: 32px;
  background-color: #ffffff;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  margin-top: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  background-color: #555555;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  margin-top: 16px;
  color: #ffffff;
  cursor: pointer;
  float: right;
`;
