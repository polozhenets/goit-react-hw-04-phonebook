import styled from "styled-components";

export const Form = styled.form`
width: 320px;
display: block;
flex-direction: column;
gap: 30px;
padding: 30px;
outline: 1px solid black;
`

export const Button = styled.button`
width: 53%;
margin: 0 auto;
margin-top: 10px;
background-color: #fff;
font-weight: 700;
`

export const Label = styled.label`
display: block;
margin-bottom: 3px;
&:not(:first-child){
margin-top: 15px;
}
`