'use client'
import React, { useState } from "react";
import SortableHeader from "@/components/home/dataTable/sortableHeader";
import SearchBarHeader from "@/components/home/dataTable/searchBarHeader";
import { recentStrams } from "@/data";
import { shortNumber } from "@/utils";
import { DefaultSortIcon, SearchIcon, SortDownIcon, SortUpIcon } from "@/icons";

interface StreamData {
    songName: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
    userId: string;
}

const StreamTable: React.FC = () => {
    const [data, setData] = useState(recentStrams);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string | null | undefined } | null>(null);

    // Handle Sorting
    const sortData = (key: keyof StreamData) => {
        let direction: "ascending" | "descending" | null = "ascending";

        if (sortConfig && sortConfig.key === key) {
            // Cycle through 'ascending' -> 'descending' -> 'null'
            if (sortConfig.direction === "ascending") {
                direction = "descending";
            } else if (sortConfig.direction === "descending") {
                direction = null;
            } else {
                direction = "ascending";  // back to 'ascending'
            }
        }

        if (direction !== null) {
            const sortedData = [...data].sort((a, b) => {
                if (a[key] < b[key]) {
                    return direction === "ascending" ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
            setData(sortedData);
        } else {
            // If direction is null, reset data to original unsorted state (assuming `initialData` holds the original)
            setData(recentStrams);
        }

        setSortConfig({ key, direction });
    };


    // Filter Data based on search
    const filteredData = data.filter(
        (stream) =>
            stream.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stream.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Table */}
            <div className="w-full">
                <table className="min-w-full text-regular border border-zinc-900 custom-scroll-bar table-fixed hidden sm:table">
                    <thead className="bg-zinc-800">
                        <tr>
                            <SearchBarHeader
                                title="Song Details"
                                setSearchTerm={setSearchTerm}
                                className="px-5 py-4 w-[40%] rounded-l-xl"
                            />
                            <th className="px-5 py-4 text-left w-[20%]">
                                Date Streamed
                            </th>
                            <SortableHeader
                                title="Stream Count"
                                onSort={() => sortData("streamCount")}
                                direction={sortConfig?.direction}
                                className="px-5 py-4 w-[20%]"
                            />
                            <th className="px-5 py-4 text-left rounded-r-xl w-[20%]">
                                User ID
                            </th>
                        </tr>
                    </thead>
                </table>

                <div className="sm:hidden flex justify-between gap-2 mb-5 items-center h-12">
                    <div className='flex text-regular font-normal gap-2 items-center h-full grow border border-zinc-700 rounded-lg px-4'>
                        <SearchIcon className="w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search by Song or Singer"
                            className="outline-none ring-0 bg-transparent rounded-lg text-regular text-zinc-400 h-full placeholder:text-zinc-500"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center border border-zinc-700 h-full rounded-lg">
                        <button onClick={() => sortData("streamCount")} className="opacity-50 w-10 flex items-center justify-center">
                            {
                                sortConfig?.direction === "ascending" ? (
                                    <SortUpIcon className="w-4 h-4" />
                                ) : sortConfig?.direction === "descending" ? (
                                    <SortDownIcon className="w-4 h-4" />
                                ) : <DefaultSortIcon className="w-5 h-5" />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden text-regular">
                    {filteredData.map((stream, index) => (
                        <div key={index} className={`${index === filteredData.length - 1 ? "" : "mb-4 pb-4 border-b border-zinc-800"}`}>
                            <div className="flex gap-4 items-center">
                                <img
                                    src={stream.coverImg}
                                    alt={stream.songName}
                                    className="w-10 h-10 rounded-lg"
                                />
                                <div className="flex flex-col">
                                    <div className="text-medium truncate">{stream.songName}</div>
                                    <div className="text-small opacity-50">
                                        {stream.artist}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="flex justify-between">
                                    <span className="font-medium opacity-60">Date Streamed:</span>
                                    <span>{stream.dateStreamed}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium opacity-60">Stream Count:</span>
                                    <span>{shortNumber(stream.streamCount)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium opacity-60">User ID:</span>
                                    <span>{stream.userId}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="w-full h-[400px] overflow-y-auto custom-scroll-bar hidden sm:block">
                    <table className="min-w-full text-regular table-fixed">
                        <tbody>
                            {filteredData.map((stream, index) => (
                                <tr key={index} className="hover:bg-zinc-800">
                                    <td className="px-5 py-3 rounded-l-xl truncate w-[40%]">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={stream.coverImg}
                                                alt={stream.songName}
                                                className="w-10 h-10 rounded-lg"
                                            />
                                            <div className="flex flex-col">
                                                <div className="text-medium">
                                                    {stream.songName}
                                                </div>
                                                <div className="text-small opacity-60">
                                                    {stream.artist}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 truncate w-[20%]">
                                        {stream.dateStreamed}
                                    </td>
                                    <td className="px-6 py-3 truncate w-[20%]">
                                        {shortNumber(stream.streamCount)}
                                    </td>
                                    <td className="px-6 py-3 rounded-r-xl truncate w-[20%]">
                                        {stream.userId}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default StreamTable;