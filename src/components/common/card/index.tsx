import React from 'react';

type CardProps = {
    children: React.ReactNode;
    title: string;
    className?: string;
    showDivider?: boolean;
    bgImage?: string;
};

type CardItemProps = {
    children: React.ReactNode;
    subTitle?: string;
};

const Card = (props: CardProps) => {
    const { children, title, className, showDivider = true, bgImage } = props;

    const hasCardItem = React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.type === Card.Item
    );

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className={`p-5 bg-zinc-900 transition-colors duration-500 bg-no-repeat border border-zinc-800 shadow-inner shadow-zinc-800 rounded-3xl bg-[top_20px_right_20px] ${className}`}>
            <div className='text-medium opacity-60 truncate'>
                {title}
            </div>
            {showDivider && (
                <div className={`w-8 my-1 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500`} />
            )}
            <div className='mt-5'>
                {hasCardItem ? children : <div className='text-xl'>{children}</div>}
            </div>
        </div>
    );
};

const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
    const { children, subTitle } = props;
    return (
        <div className='flex gap-2 flex-col lg:flex-row lg:items-end'>
            <div className='text-xl md:text-2xl font-semibold truncate'>
                {children}
            </div>
            {subTitle && (
                <div className='text-regular text-zinc-400'>
                    {subTitle}
                </div>
            )}
        </div>
    );
};

// Attach the CardItem component to Card
Card.Item = CardItem;

// Set display names
Card.displayName = 'Card';

export default Card;