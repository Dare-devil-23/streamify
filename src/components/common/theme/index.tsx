'use client';
import { MoonIcon, SunIcon } from '@/icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const Theme: React.FC = () => {

    const [mounted, setIsMounted] = useState<boolean>(true);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    if(!mounted) {
        return null;
    }

    return (
        <button onClick={toggleTheme} className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800'>
            {
                theme === 'dark' ? (
                    <MoonIcon className='w-4 h-4 md:w-6 md:h-6 text-zinc-300 inline-block' />
                ) : (
                    <SunIcon className='w-4 h-4 md:w-6 md:h-6 text-zinc-300 inline-block' />
                )
            }
        </button>
    )
}

export default Theme