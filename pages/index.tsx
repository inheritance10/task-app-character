// app/page.tsx
import React from 'react';
import Filter from "@/components/Filter";


import {getCharacterData} from "@/utility/helper";
import {CharacterCardProps} from "@/components/CharacterCard/CharacterCardProps";
import CharacterCard from "@/components/CharacterCard";


interface PageProps {
    initialCharacters: CharacterCardProps[];
    totalPages: number;
}

export default function Home({ initialCharacters, totalPages }: PageProps) {
    const [characters, setCharacters] = React.useState<CharacterCardProps[]>(initialCharacters);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [total, setTotal] = React.useState(totalPages);
    const [loading, setLoading] = React.useState(false); // Loading state

    const fetchCharacters = async (page: number, status: string, gender: string) => {
        setLoading(true); // Set loading to true before fetching data
        const res = await getCharacterData(page, status, gender);
        setCharacters(res.results);
        setTotal(res.info.pages);
        setCurrentPage(page);
        setLoading(false); // Set loading to false after fetching data
    };

    const handleFilterChange = (status: string, gender: string) => {
        fetchCharacters(1, status, gender);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
            <Filter onFilterChange={handleFilterChange} />

            {loading ? ( // Show loading indicator while loading
                <div className="flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {characters?.map((character) => (
                        <CharacterCard key={character.id} {...character} />
                    ))}
                </div>
            )}

            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={() => fetchCharacters(currentPage - 1, '', '')}
                    disabled={currentPage <= 1 || loading} // Disable button when loading
                    className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
                >
                    Previous
                </button>
                <span className="mx-2">Page {currentPage} of {total}</span>
                <button
                    onClick={() => fetchCharacters(currentPage + 1, '', '')}
                    disabled={currentPage >= total || loading} // Disable button when loading
                    className="bg-blue-500 text-white rounded px-4 py-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

// Fetch data from API
export async function getServerSideProps() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    return {
        props: {
            initialCharacters: data.results,
            totalPages: data.info.pages,
        },
    };
}
