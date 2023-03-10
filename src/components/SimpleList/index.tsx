import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { SingleLinkedList } from '@/classes/singleLinkedList';
import { Square, SquareContainer, StyledButton, StyledInput } from './style';

export default function SimpleList() {
  const [list,setList] = useState(new SingleLinkedList().push(1));
  const [filteredList, setFilteredList] = useState<any[]>([]);

  useEffect(()=>{
    const copyList = _.clone(list);
    let updatedList=[]; 
    while(copyList.head!==null){
      updatedList.unshift(copyList.head.data);
      copyList.next();
    }
    setFilteredList(updatedList);
  },[list]);

  const AddList = () =>{
    const copyList = _.clone(list);
    copyList.push(copyList.head.data+copyList.head.data);
    setList(copyList);
  }

  const UnshiftList = () =>{
    const copyList = _.clone(list);
    copyList.unshift(copyList.head.data);
    setList(copyList);
  }

  const AddAtPosition = () =>{
    const copyList = _.clone(list);
    copyList.addAtPosition(69);
    setList(copyList);
  }

  return (
    <main>
      <p>
        Simple Linked List
      </p>
      <SquareContainer>
        {filteredList.map((i, index)=>{
          return (<Square key={index}>{i}</Square>)
        })}
      </SquareContainer>
      <StyledButton onClick={AddList}>add</StyledButton>
      <StyledButton onClick={UnshiftList}>add at the start</StyledButton>
      <StyledButton onClick={AddAtPosition}>add At Position</StyledButton>
    </main>
  );
}
