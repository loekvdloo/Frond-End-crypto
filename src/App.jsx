import CryptoInfo from './CryptoInfo';
import CoinDetails from './CoinDetails';
import Headers from "./Header.jsx";
import Footers from "./Footer.jsx";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <main>
                <Headers/>
                <Routes>
                    <Route path={"/"} element={<CryptoInfo/>}/>
                    <Route path={"coin/:id"} element={<CoinDetails/>}/>
                </Routes>
                <Footers/>
            </main>
        </>
    );
}

export default App;
