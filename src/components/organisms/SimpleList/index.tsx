import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { SingleLinkedList } from '@/classes/singleLinkedList';
import { 
  ContentContainer,
  Square,
  SquareContainer,
  ListButton,
  ListInput,
  Description
} from './style';
import { IFilteredList } from '@/interfaces/SimpleList';

export default function SimpleList() {
  const [list,setList] = useState(new SingleLinkedList().push(1));
  const [filteredList, setFilteredList] = useState<IFilteredList[]>([]);
  const [selected, setSelected] = useState<IFilteredList>();
  const [numberToAdd, setNumberToAdd] = useState<number>(0);

  //An effect to keep displaying the filtered list 
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

  //Add at the start of the list
  const AddList = () =>{
    const copyList = _.clone(list);
    copyList.push(numberToAdd);
    setList(copyList);
  }

  //Add at the end of the list
  const UnshiftList = () =>{
    const copyList = _.clone(list);
    copyList.unshift(numberToAdd);
    setList(copyList);
  }

  //Add at a random or predetermined position of the list
  const AddAtPosition = () =>{
    const copyList = _.clone(list);
    const position = selected ? selected.position : Math.ceil(Math.random() * (copyList.length - 1) + 1);
    copyList.addAtPosition(numberToAdd, position);
    setSelected(undefined);
    setList(copyList);
  }

  //Update the selected item in the list
  const UpdateSelectedItems = (index:number) => {
    const updatedList=filteredList.map((list)=>{
      if(list.position===index){
        setSelected(!list.selected ? list: undefined);
        list.selected = !list.selected;
      }
      else{
        list.selected = false;
      }
      return list
    })
    setFilteredList(updatedList);
  }

  //Check if list is a Palindrome
  const CheckPalindrome = () =>{
    const copyList = _.clone(list);
    return copyList.isPalindrome() ? 'true' : 'false';
  }

  return (
    <main>
      <ContentContainer>
        <div>
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
          <ListInput 
            type='number'
            value={numberToAdd}
            placeholder='Number To Add'
            onChange={(e:any)=>{setNumberToAdd(parseFloat(e.target.value));}}
          />
          <p>
            Current Amount: {list.length}
          </p>
          <p>
            Is a Palindrome: {CheckPalindrome()}
          </p>
          <ListButton onClick={AddList}>Add at the end</ListButton>
          <ListButton onClick={UnshiftList}>Add at the start</ListButton>
          <ListButton onClick={AddAtPosition}>Add At {selected?.data || 'random'} Position</ListButton>
          <ListButton onClick={()=>{console.log(list)}}>Log List - Debug</ListButton>
        </div>
        <Description>
          This is a Linked list, it&apos;s a common data structure, being a chain of nodes that connect
          between themselves by a pointer, which references the next item in the list, or a null value.{'\n'}
          a good example of a linked list is a list of songs being played in a music player.{'\n'}
          this one here it&apos;s a simple one, it only references forward, and it ends on a null, here
          we have some functions for you to test it.
        </Description>
      </ContentContainer>
    </main>
  );
}