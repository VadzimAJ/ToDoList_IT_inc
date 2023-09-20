import React from 'react';

type ButtonType = {
  title: string;
  callBack: (title: string ) => void;

  callBack: (title?: string | undefined) => void;
};

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callBack(props.title); // Передаем title в callBack
  }

  return (
    <button onClick={onClickHandler}>{props.title}</button>
  )
}