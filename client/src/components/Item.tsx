import React, { useState } from 'react';
import { Add, Remove, Delete } from '@mui/icons-material';
import { colors } from '@mui/material';

type ItemProps = {
  id: number;
  title: string;
  authorName: string;
  imageUrl: string;
  price: number;
};

const Item = (props: ItemProps) => {
  const [number, setNumber] = useState(1);

  function handleAdd() {
    setNumber(number + 1);
  }
  function handleRemove() {
    setNumber(number - 1);
  }
  function handleDelete() {
    //removeItem(id);
  }

  return (
    <div className=" flex flex-row items-center justify-center gap-14">
      <img
        src={props.imageUrl}
        alt={props.title}
        className=" h-[160px] w-[110px] object-contain"
      />
      <div className=" flex w-[250px] flex-col items-start gap-8">
        <p> {props.title} </p>
        <p className=" text-xs text-gray-400"> {props.authorName} </p>
      </div>
      <div className=" flex flex-row items-center justify-center gap-10">
        {number > 0 && (
          <div className="flex items-center justify-center gap-2">
            <Remove
              fontSize="small"
              className=" cursor-pointer rounded-full border-[1px] border-solid border-gray-500"
              onClick={handleRemove}
            />
            <Add
              fontSize="small"
              className=" cursor-pointer rounded-full border-[1px] border-solid border-gray-500"
              onClick={handleAdd}
            />
          </div>
        )}
        {number === 0 && <Delete />}
        <p>{number}</p>
      </div>
      <p className=" whitespace-nowrap">{number * props.price} $</p>
    </div>
  );
};

export default Item;
