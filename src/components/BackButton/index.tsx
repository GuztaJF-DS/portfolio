import React from 'react'
import { useRouter } from 'next/router'
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  width: fit-content;
  border: none;
  font-size: 0.9rem;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
  :hover{
    cursor:pointer;
  }
`

export function BackButton() {
  const router = useRouter()

  return (
    <StyledButton type="button" onClick={() => router.back()}>
      {'<'} Back
    </StyledButton>
  );
}
