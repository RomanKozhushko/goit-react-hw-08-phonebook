import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  margin: 40px auto;
  padding: 40px;
  width: 440px;
  background-color: steelblue;
  border-radius: 5px;

  animation-name: opacity2;
  animation-duration: 1000ms;

  @keyframes opacity2 {
    0% {opacity: 0}
    100% {opacity: 1}
  }

`
export const Input = styled(Field)`
 background-image: linear-gradient(to right, white, steelblue);
  border: 0;
  font-size: 22px;
  font-weight: 600;
  max-width: 282px;
  color: steelblue;
  margin-right: auto;
  margin-left: 46px;;
`
export const Button = styled.button`
width: 366px;
  font-size: 16px;
  height: 30px;
  font-weight: bold;
  color: white;
  background-color: steelblue;
  border: 0;
  border-radius: 3px;
  `