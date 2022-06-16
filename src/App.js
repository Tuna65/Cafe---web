import './App.css';
import '../src/assets/grid/grid.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './assets/Component/Pages/HomePage/HomePage';
import MenuDefaultPage from './assets/Component/Pages/MenuDefault/MenuDefault';
import AboutUsPage from './assets/Component/Pages/AboutUsPage/AboutUsPage';
import EventPage from './assets/Component/Pages/EventPage/EventPage';
import ContactPage from './assets/Component/Pages/ContactPage/ContactPage';
import BarPartyPage from './assets/Component/Pages/BarPartyPage/BarPartyPage';
import ItemPage from './assets/Component/Pages/ItemPage/ItemPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menudefault" element={<MenuDefaultPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/event" element={<EventPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/party-bar" element={<BarPartyPage />} />
                <Route path="/item-page" element={<ItemPage />} />
            </Routes>
        </div>
    );
}

export default App;
