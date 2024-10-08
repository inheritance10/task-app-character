export interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    type: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
}
