import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { SingleLinkedList } from '@/classes/singleLinkedList';
import { Square, SquareContainer, StyledButton, StyledInput } from './style';

export default function SimpleList() {
  const [list,setList] = useState(new SingleLinkedList().push(1));
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [numberToAdd, setNumberToAdd] = useState<number>(0);

  useEffect(()=>{
    const copyList = _.clone(list);
    let updatedList=[]; 
    while(copyList.head!==null){
      updatedList.unshift({
        data:copyList.head.data,
        position:copyList.head.position,
        selected: false
      });
      copyList.next();
    }
    setFilteredList(updatedList);
  },[list]);

  const AddList = () =>{
    const copyList = _.clone(list);
    copyList.push(numberToAdd);
    setList(copyList);
  }

  const UnshiftList = () =>{
    const copyList = _.clone(list);
    copyList.unshift(numberToAdd);
    setList(copyList);
  }

  const AddAtPosition = () =>{
    const copyList = _.clone(list);
    copyList.addAtPosition(numberToAdd,Math.ceil(Math.random() * (copyList.length - 1) + 1));
    setList(copyList);
  }

  const UpdateSelectedItems = (index:number) => {
    const updatedList=filteredList.map((list)=>{
      if(list.position===index){
        list.selected = !list.selected;
      }
      else{
        list.selected = false;
      }
      return list
    })
    setFilteredList(updatedList);
  }

  return (
    <main>
      <p>
        Simple Linked List
      </p>
      <SquareContainer>
        {filteredList.map((i)=>{
          return (
            <Square 
              onClick={()=>{
                UpdateSelectedItems(i.position);
              }}
              selected={i?.selected}
              key={i.position}
            >
              {i.data}
            </Square>
          )
        })}
      </SquareContainer>
      <StyledInput 
        type='number'
        value={numberToAdd}
        placeholder='Number To Add'
        onChange={(e)=>{setNumberToAdd(parseFloat(e.target.value));}}
      />
      <StyledButton onClick={AddList}>Add</StyledButton>
      <StyledButton onClick={UnshiftList}>Add at the start</StyledButton>
      <StyledButton onClick={AddAtPosition}>Add At random Position</StyledButton>
      <StyledButton onClick={()=>{console.log(list)}}>Log List - Debug</StyledButton>
    </main>
  );
}
