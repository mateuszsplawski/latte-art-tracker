import { Form } from "formik";
import styled from "styled-components";

export const StyledLoginImage = styled.img`
margin: 1rem 0;
max-height:20rem;
`

export const StyledLoginForm = styled(Form)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
