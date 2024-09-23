import React from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { camelCaseToSentenceCase } from '@/src/utils';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
    disableColor?: boolean,
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, disableColor = false }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/20 backdrop-blur rounded-xl text-small px-5 py-2 flex flex-col">
                {payload.map((pld) => (
                    <div key={pld.name} style={{ color: disableColor ? 'white' : pld.color }} className='flex gap-1'>
                        <div>{camelCaseToSentenceCase(String(pld.name))}:</div>
                        <div>{pld.value}</div>
                    </div>
                ))}
            </div>
        );
    }

    return null; // In case the tooltip is not active, return null
};

export default CustomTooltip;
