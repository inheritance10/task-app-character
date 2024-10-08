import React from 'react';
import {FilterProps} from "@/components/Filter/FilterProps";


const Index: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [status, setStatus] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleFilterChange = () => {
        onFilterChange(status, gender);
    };

    return (
        <div className="flex gap-4 mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <select
                onChange={(e) => setStatus(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            >
                <option value="" className="text-gray-500">All Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <select
                onChange={(e) => setGender(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            >
                <option value="" className="text-gray-500">All Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <button
                onClick={handleFilterChange}
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
            >
                Filter
            </button>
        </div>
    );
};

export default Index;
