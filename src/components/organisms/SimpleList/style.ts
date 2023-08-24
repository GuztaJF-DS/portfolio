import Styled, { css } from 'styled-components';

export const ContentContainer = Styled.div`
  display: flex;
  flex-direction:row;
  > div{
    display: flex;
    flex-direction:column;
  }
  @media (max-width:510px){
    align-items:center;
    width: 100%;
    display: flex;
    flex-direction:column;
  }
`;

export const SquareContainer = Styled.div`
  display: flex;
  flex-direction: row;
  max-width:220px;
  flex-wrap: wrap;
`;

export const Square = Styled.button<{ selected?: boolean }>`
${({ selected }) => css`
  border: 1px solid white;
  min-width: 30px;
  text-align: center;
  margin-right: 5px;
  margin-top: 5px;
  background-color: ${selected ? 'white' : 'black'};
  color: ${selected ? 'black' : 'white'};
`}
`;

export const ListButton = Styled.button`
  width: 210px;
  margin-top:10px;
`;

export const ListInput = Styled.input`
  width: 210px;
  margin-top:10px;
`;
export const Description = Styled.p`
  margin-top:20px;
  margin-left:20px;
  white-space: pre-wrap;
  max-width: 305px;
`;
