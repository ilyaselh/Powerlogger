import styled from "styled-components";

const Button = styled.button`
  width: 12rem;
  height: 2.5rem;
  transition: all 0.25s ease-in-out;
  font-size: 1.1rem;
  border-style: none;
  color: white;
  cursor: pointer;
  background: #6644f0;
  padding: 0.3rem 2rem;
  border-radius: 1.5rem;
  &:hover {
    background: #6644f0;
  }
`;

const Button1 = styled.button`
  width: ${props => (props.sm ? "8rem" : "11rem")};
  height: ${props => (props.sm ? "1.75rem" : "1.75rem")};
  transition: all 0.25s ease-in-out;
  font-size: 0.9rem;
  font-weight: 600;
  border-style: none;
  color: white;
  cursor: pointer;
  background: #6644f0;
  border-radius: 1.5rem;
  &:hover {
    background: #5c38ec;
  }
`;

export { Button, Button1 };
