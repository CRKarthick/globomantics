import { useMemo } from 'react';

const useFilteredHouse = allHouses => {
    const featuredHouse = useMemo(() => {
        if (allHouses.length) {
            const randomIndex = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
    }, [allHouses]);
    return featuredHouse;
};

export default useFilteredHouse;
