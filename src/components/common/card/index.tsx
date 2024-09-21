import React from 'react';

type CardProps = {
    children: React.ReactNode;
    title: string;
    className?: string;
    showDivider?: boolean;
};

const Card: React.FC<CardProps> & { Item: React.FC<CardItemProps> } = (props: CardProps) => {
    const { children, title, className, showDivider = true } = props;

    return (
        <div className={`p-5 border border-zinc-800 rounded-3xl ${className}`}>
            <div className='text-medium opacity-60 truncate'>
                {title}
            </div>
            {showDivider && (
                <div className='w-8 my-1 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500' />
            )}
            <div className='mt-5'>
                {children}
            </div>
        </div>
    );
};

type CardItemProps = {
    children: React.ReactNode;
    subTitle?: string;
};

Card.Item = (props: CardItemProps) => {
    const { children, subTitle } = props;
    return (
        <div className='flex gap-2 flex-col lg:flex-row lg:items-end'>
            <div className='text-xl md:text-2xl font-semibold truncate'>
                {children}
            </div>
            {subTitle && (
                <div className='text-regular text-zinc-500 opacity-90'>
                    {subTitle}
                </div>
            )}
        </div>
    );
};

export default Card;