import { DefaultSortIcon, SortDownIcon, SortUpIcon } from "@/icons";
import React from "react";

interface SortableHeaderProps {
    title: string;
    onSort: () => void;
    isSorted?: boolean;
    direction?: string;
    className?: string;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({ title, onSort, isSorted, direction, className }) => {
    return (
        <th
            className={`${className} cursor-pointer select-none`}
            onClick={onSort}
        >
            <div className="flex items-center gap-2">
                {title}
                {isSorted ? (
                    direction === "ascending" ? (
                        <SortUpIcon className="w-5 h-5 inline-block text-zinc-200" />
                    ) : (
                        <SortDownIcon className="w-5 h-5 inline-block text-zinc-200" />
                    )
                ) : (
                    <DefaultSortIcon className="opacity-50 w-5 h-5 inline-block" />
                )}
            </div>
        </th>
    );
};

export default SortableHeader;
