import React from 'react';

interface DeleteButtonProps {
    id: number
    onClick: (index: number) => void
}

const DeleteButton = ({onClick, id}: DeleteButtonProps) => {
    return (
        <button className={'flex justify-center items-center'} onClick={() => onClick(id)}>
            <span className={'material-symbols-outlined'}>delete</span>
        </button>
    );
};

export default DeleteButton;