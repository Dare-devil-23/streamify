import { SearchIcon } from '@/icons';
import React, { useState, useRef, useEffect } from 'react';

type Props = {
    setSearchTerm: (value: string) => void;
    title: string;
    className?: string;
}

const SearchBarHeader: React.FC<Props> = (props: Props) => {
    const { setSearchTerm, title, className } = props;
    const [isInputVisible, setInputVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setInputVisible(false);
        }
    };

    useEffect(() => {
        if (isInputVisible) {
            inputRef.current?.focus();
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isInputVisible]);

    return (
        <th className={`${className}`}>
            <div className='w-full flex gap-5 items-center'>
                <div>
                    {title}
                </div>
                <div className='flex text-regular font-normal gap-2 items-center max-w-[200px]'>
                    <button
                        ref={buttonRef}
                        onClick={() => setInputVisible(!isInputVisible)}
                    >
                        <SearchIcon className="w-5 h-5 text-zinc-700" />
                    </button>
                    {isInputVisible && (
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search by Song or Singer"
                            className="outline-none ring-0 bg-transparent rounded-lg text-regular text-zinc-400 placeholder:text-zinc-700"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}
                </div>
            </div>
        </th>
    );
}

export default SearchBarHeader;