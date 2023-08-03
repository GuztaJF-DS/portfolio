import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import useTranslation from 'next-translate/useTranslation'
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
  const { t } = useTranslation();

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
      <ContentContainer>
        <div>
          <p>
            {t("studies:section2")}
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
            onChange={(e:React.FormEvent<HTMLInputElement>)=>{setNumberToAdd(parseFloat(e.currentTarget.value));}}
          />
          <p>
            {t("studies:currentAmount")}: {list.length}
          </p>
          <p>
            {t("studies:palindrome")}: {CheckPalindrome()}
          </p>
          <ListButton onClick={AddList}>{t("studies:button1")}</ListButton>
          <ListButton onClick={UnshiftList}>{t("studies:button2")}</ListButton>
          <ListButton onClick={AddAtPosition}>{
            (selected?.data || selected?.data===0)
              ? `${t('studies:button3')} ${selected?.data}`
              : t('studies:button3')+t('studies:button3-part2')
          }</ListButton>
          <ListButton onClick={()=>{console.log(list)}}>{t("studies:button4")}</ListButton>
        </div>
        <Description>
          {t("studies:linkedListText")}
        </Description>
      </ContentContainer>
  );
}