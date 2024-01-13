import React from 'react';
import {twMerge} from "tailwind-merge";
interface BoxProps {
    children: React.ReactNode;
    className?: string;
}
const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div className={twMerge('rounded-lg h-fit w-full', className)}
             style={{ backgroundColor: 'rgba(248,211,197,255)' }}>
            {children}
        </div>

    );
};

export default Box;