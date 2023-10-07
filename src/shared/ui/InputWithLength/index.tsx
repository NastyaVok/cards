import React from 'react';
import { Input } from 'antd';

interface Props {
    length: number,
    classes?: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

export const InputWithLength = ({length, value, setValue, classes}: Props) => {

    return (
        <div className={classes}>
        <Input 
        value={value}
        showCount 
        maxLength={length} 
        onChange={(e) => setValue(e.target.value)} 
        />
        </div>
    )
}