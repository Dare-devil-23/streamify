import React from 'react'
import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { camelCaseToSentenceCase } from '@/utils';

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/20 backdrop-blur rounded-xl text-small px-5 py-2 flex flex-col">
                {payload.map((pld) => (
                    <div style={{ color: pld.color }} className='flex gap-1'>
                        <div>{camelCaseToSentenceCase(String(pld.name))}:</div>
                        <div>{pld.value}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CustomTooltip;