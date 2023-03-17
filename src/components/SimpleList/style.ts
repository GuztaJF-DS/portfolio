import Styled, { css } from "styled-components";

export const SquareContainer = Styled.div`
  display: flex;
  flex-direction: row;
  max-width:220px;
  flex-wrap: wrap;
`

export const Square = Styled.button<{ selected?: boolean;}>`
${({ selected }) => css`
  border: 1px solid white;
  min-width: 30px;
  text-align:center;
  margin-right:5px;
  margin-top:5px;
  background-color: ${selected? 'white' : 'black'};
  color: ${selected? 'black' : 'white'};
`}
`

export const StyledButton = Styled.button`
  width: 210px;
  margin-top:10px;
`

export const StyledInput = Styled.input`
  width: 210px;
  margin-top:10px;
`
export const Description = Styled.p`
  margin-top:20px;
  white-space: pre-wrap;
  max-width: 305px;
`