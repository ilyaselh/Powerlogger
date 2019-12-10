import styled from "styled-components";

const Button = styled.button`
  width: 12rem;
  height: 2.5rem;
  transition: all 0.25s ease-in-out;
  font-family: "Roboto"
  font-size: 1.1rem;
  border-style: none;
  color: white;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #ff0937 0%,
    #ff6315 100%
);
  padding: 0.3rem 2rem;
  border-radius: 1.5rem;
  &:hover {
    background: linear-gradient(
      90deg,
      #cc0026 0%,
      #c95e00 100%
    );
  }
`;

const Button1 = styled.button`
  width: 10rem;
  height: 2rem;
  transition: all 0.25s ease-in-out;
  font-family: "Roboto"
  font-size: 1.1rem;
  border-style: none;
  color: white;
  cursor: pointer;
  background: linear-gradient(90deg,#ff0937 0%,#ff6315 100%);
  border-radius: 1.5rem;
  &:hover {
    background: linear-gradient(90deg,#ff0937 0%,#ff6315 100%);;
  }
`;

export { Button, Button1 };
