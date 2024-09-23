import React from "react";
import { DefaultSortIcon, SortDownIcon, SortUpIcon } from "@/src/icons";

interface SortableHeaderProps {
    title: string;
    onSort: () => void;
    direction?: string | null | undefined;
    className?: string;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({ title, onSort, direction, className }) => {
    return (
        <th
            className={`${className} cursor-pointer select-none`}
            onClick={onSort}
        >
            <div className="flex items-center gap-2">
                {title}
                {direction ? (
                    direction === "ascending" ? (
                        <SortUpIcon className="w-4 h-4 inline-block text-zinc-200" />
                    ) : (
                        <SortDownIcon className="w-4 h-4 inline-block text-zinc-200" />
                    )
                ) : (
                    <DefaultSortIcon className="opacity-50 w-5 h-5 inline-block" />
                )}
            </div>
        </th>
    );
};

export default SortableHeader;
