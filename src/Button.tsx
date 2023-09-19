import React from 'react';

type ButtonType = {
  title: string;
<<<<<<< HEAD
  callBack: (title?: string | undefined) => void;
=======
  callBack: (title?: string) => void;
>>>>>>> e502f39e63137ad4564cc17930241ac30446ef14
};

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callBack(props.title); // Передаем title в callBack
  }

  return (
    <button onClick={onClickHandler}>{props.title}</button>
  )
}