export const getCharacterData = async (page: any,status: string, gender: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`);
    return await res.json();
}
