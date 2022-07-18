import React from 'react';

interface IconProps {
    iconType: string
}

const Icon = ({iconType}: IconProps) => {
    return (
        <div className={'flex justify-center items-center'}>
            {iconType === 'add' ?
                <span className={'material-symbols-outlined text-green-500'}>{iconType}</span>
            :
                <span className={'material-symbols-outlined text-red-500'}>{iconType}</span>
            // <span className={'material-symbols-outlined text-yellow-600'}>{iconType}</span>
            }
        </div>
    );
};

export default Icon;