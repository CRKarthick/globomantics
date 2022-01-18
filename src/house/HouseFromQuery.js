import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import House from '.';
import { useContext } from 'react';
import HousesContext from '../context/housesContext';

export const HouseFromQuery = () => {
    const allHouses = useContext(HousesContext);
    const { id } = useParams();
    const house = allHouses.find(h => h.id === parseInt(id));

    if (!house) return <div> House not found.</div>;
    return <House house={house}></House>;
};
