import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CharacterCardProps } from "@/components/CharacterCard/CharacterCardProps";

const Index: React.FC<CharacterCardProps> = ({
                                                         id,
                                                         name,
                                                         status,
                                                         species,
                                                         gender,
                                                         image,
                                                         type,
                                                         origin,
                                                         location,
                                                     }) => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsImageVisible(true);
        }, 700);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="max-w-xs mx-auto my-4 bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="flex p-4">
                <div className="relative flex-shrink-0 mr-4">
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className={`rounded-lg object-cover transition duration-500 ${isImageVisible ? 'blur-none' : 'blur-lg'}`}
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-white">{name}</h2>
                    <div className={`inline-flex items-center px-3 py-1 text-xs font-semibold text-white rounded-full ${status === "Alive" ? "bg-green-500" : "bg-red-500"}`}>
                        {status}
                    </div>
                    <div className="mt-2 text-sm text-gray-300">
                        <p>
                            <span className="font-medium">Species:</span> {species}
                        </p>
                        <p>
                            <span className="font-medium">Gender:</span> {gender}
                        </p>
                        <p>
                            <span className="font-medium">Type:</span> {type || 'N/A'}
                        </p>
                        <p>
                            <span className="font-medium">Origin:</span> {origin?.name || 'Unknown'}
                        </p>
                        <p>
                            <span className="font-medium">Location:</span> {location?.name || 'Unknown'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
