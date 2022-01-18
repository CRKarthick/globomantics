import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import { HouseFromQuery } from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFilteredHouse from '../hooks/useFilteredHouse';
import HousesContext from '../context/housesContext';

function App() {
    // Custom Hooks
    const allHouses = useHouses();
    const featuredHouse = useFilteredHouse(allHouses);

    return (
        <Router>
            <HousesContext.Provider value={allHouses}>
                <div className='container'>
                    <Header subtitle='Providing houses all over the world' />
                    <HouseFilter />
                    <Switch>
                        <Route path='/searchresults/:country'>
                            <SearchResults />
                        </Route>
                        <Route path='/house/:id'>
                            <HouseFromQuery />
                        </Route>
                        <Route path='/'>
                            <FeaturedHouse house={featuredHouse} />
                        </Route>
                    </Switch>
                </div>
            </HousesContext.Provider>
        </Router>
    );
}

export default App;
