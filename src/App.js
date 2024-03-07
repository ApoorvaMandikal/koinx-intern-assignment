import logo from './logo.svg';
import './App.css';
import Header from "../src/Components/Header/Header"
import { Container } from '@mui/material';
import Cards from './Components/Cards/Cards';

const API_URL = 'https://pro-api.coingecko.com/api/v3/ping?x_cg_pro_api_key=CG-xkRg7TR313TXEL3G5wva43HL'	

function App() {
 return (
    <div className='container'>
        <Header className="header-container"></Header>
        <Container className='main-body'>
            <Cards className="cards-container"/>

        </Container>
    </div>
 )
}

export default App;
