'use client'
import React, { useState } from "react";
import SortableHeader from "./sortableHeader";
import Card from "@/components/common/card";
import { recentStrams } from "@/data";
import { shortNumber } from "@/tils";
import SearchBarHeader from "./searchBarHeader";

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
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

    // Handle Sorting
    const sortData = (key: keyof StreamData) => {
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
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
        setSortConfig({ key, direction });
    };

    // Filter Data based on search
    const filteredData = data.filter(
        (stream) =>
            stream.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stream.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Card title="Stream History">
            {/* Table */}
            <div className="w-full">
                <table className="min-w-full text-regular border border-black table-scroll-bar table-fixed hidden sm:table">
                    <thead className="bg-zinc-900">
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
                                isSorted={sortConfig?.key === "streamCount"}
                                direction={sortConfig?.direction}
                                className="px-5 py-4 w-[20%]"
                            />
                            <th className="px-5 py-4 text-left rounded-r-xl w-[20%]">
                                User ID
                            </th>
                        </tr>
                    </thead>
                </table>

                {/* Mobile View */}
                <div className="sm:hidden text-regular">
                    {filteredData.map((stream, index) => (
                        <div key={index} className="mb-3 pb-3 border-b border-zinc-800">
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
                <div className="w-full h-[400px] overflow-y-auto table-scroll-bar hidden sm:block">
                    <table className="min-w-full text-regular table-fixed">
                        <tbody>
                            {filteredData.map((stream, index) => (
                                <tr key={index}>
                                    <td className="px-5 py-3 truncate w-[40%]">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={stream.coverImg}
                                                alt={stream.songName}
                                                className="w-10 h-10 rounded-lg"
                                            />
                                            <div className="flex flex-col gap-1">
                                                <div className="text-medium">
                                                    {stream.songName}
                                                </div>
                                                <div className="text-small">
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
                                    <td className="px-6 py-3 truncate w-[20%]">
                                        {stream.userId}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </Card>
    );
};

export default StreamTable;