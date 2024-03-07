// 	
// :process.env.REACT_APP_API_KEY
import React, {useState, useEffect} from 'react';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import './Cards.css'
import logo from '../../assets/images/Component-52.png'
import graph from '../../assets/images/div.tokenomics-wrapper.png'
import Carousel from './Cards-carousel/carousel';
import text from './file.js'
import ActionAreaCard from './team-cards/team-cards.jsx'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'


const Cards = () => {
    // const apiKey = process.env.REACT_APP_API_KEY;
     const API_URL = `https://pro-api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true`;
    const [data,setData] = useState();
        useEffect(() => {
            fetch(API_URL)
            .then((res) => res.json())
           .then((d) => {
            console.log(data);
             setData(d);
         })
        .catch((error) => console.log(error));
     },[]);
            
        
    //     return fetch(API_URL, {
    //         method: "GET",
    //         headers: {
    //           "x_cg_pro_api_key": process.env.REACT_APP_API_KEY,
    //         },
    //       })
    //       .then((res) => res.json())
    //       .then((d) => {
    //         setData(d);
    //         console.log(data);
    //     })
    //     .catch((error) => console.log(error));
    // };
    
    
    //   useEffect(() => {
    //     fetchInfo();
    //   }, []);

    return (
        <Container className='card-container'>
        <Card className='card-body'>
            <div className='card1'>
                <div className='card1-header' style={{padding:"1%", fontSize:"1.1rem"}}>
                    <img src={logo} style={{height:"2rem",width:'2rem'}}></img>
                        <div>Bitcoin</div>
                        <div style= {{ color:"#5D667B", fontSize:'0.7rem'}}>BTC</div>
                        <button className="rank-button" href="#">Rank #1</button>
                </div>
                <div className='usd-ind'>
                    <div className='usd'>
                        </div>
                </div>
                <div className='chart-div'>
                    <AdvancedRealTimeChart symbol="BTCUSD" theme='light' save_image='false' left_toolbar hide_volume hide_top_toolbar hide_side_toolbar hide_legend style='2' autosize  />
                </div>
            </div>
        </Card>
        <Card className='card-body'>
            <div className='card2'>

            </div>
        </Card>
        <Card className='card-body'>
            <div className='card3'>
             <div className='card-header'>Sentiment</div>
             <div className='sub-headings'>
                <div className='heading'>Key Events</div>
                <Carousel></Carousel>
            </div>
            <div className='sub-headings'>
                <div className='heading'>Analyst Estimates</div>
            </div>
            </div>
        </Card>
        <Card className='card-body'>
            <div className='card4'>
                <div className='card-header'>About Bitcoin</div>
                <div className='sub-headings'>What is Bitcoin?
                <div className='textarea'>
                    <p>
                    Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                    </p>
                </div>
                </div>
                <div className='sub-headings'>Lorem ipsum dolor sit amet
                    <div className='textarea'>
                    <p>
                        Donec venenatis facilisi fermentum. Morbi class est lorem pharetra pretium diam nisi, in varius sed sollicitudin. Amet ipsum sociosqu himenaeos volutpat quis porta, integer vehicula massa mi eu magna. Feugiat ullamcorper per venenatis facilisi bibendum cursus tincidunt facilisis duis bibendum dignissim? Orci porttitor enim vulputate viverra sit vulputate dictum ridiculus eleifend per.
                    </p>
                    <p>
                        Phasellus phasellus dolor sodales porttitor. Ut elit imperdiet inceptos tellus, suscipit nulla. Fringilla eget hac facilisi, lobortis fringilla nisl nibh taciti sociosqu litora facilisi. Elementum vehicula iaculis justo mattis cubilia. Sociosqu elementum platea tristique fermentum sociosqu libero aliquam. Blandit sit eleifend iaculis sapien cum augue dictum fermentum nisi mollis dis amet! Nunc id eros nibh dis odio nunc sociosqu vulputate.
                    </p>
                    <p>
                        Interdum sem, vulputate dis! Elementum nisl porttitor mi nostra id cras dictum dictum semper tristique. Consectetur fames per adipiscing nibh platea accumsan fames penatibus! Placerat class euismod sagittis vitae nibh integer sodales convallis elit. Luctus dignissim ad viverra nullam faucibus amet netus nec, gravida dis? Diam ultricies, varius mi placerat fermentum ultricies massa. Ante rutrum proin?
                    </p>
                </div>
                </div>
                <div className='sub-headings'>
                <div className='card-header'>Already Holding Bitcoin?</div>
                <Carousel></Carousel>
                <div className='textarea'>
                <p>
                        Interdum sem, vulputate dis! Elementum nisl porttitor mi nostra id cras dictum dictum semper tristique. Consectetur fames per adipiscing nibh platea accumsan fames penatibus! Placerat class euismod sagittis vitae nibh integer sodales convallis elit. Luctus dignissim ad viverra nullam faucibus amet netus nec, gravida dis? Diam ultricies, varius mi placerat fermentum ultricies massa. Ante rutrum proin?
                    </p>
                </div>
                </div>
            </div>
        </Card>
        <Card className='card-body'>
            <div className='card5'>
                <div className='card-header'>Tokenomics</div>
                <div className='sub-headings'>Initial Distribution</div>
                <div className='tokenomics' style={{width: '35rem', height: '9rem'}}><img src={graph}></img></div>
                <div className='textarea'>
                    <p>
                        Donec venenatis facilisi fermentum. Morbi class est lorem pharetra pretium diam nisi, in varius sed sollicitudin. Amet ipsum sociosqu himenaeos volutpat quis porta, integer vehicula massa mi eu magna. Feugiat ullamcorper per venenatis facilisi bibendum cursus tincidunt facilisis duis bibendum dignissim? Orci porttitor enim vulputate viverra sit vulputate dictum ridiculus eleifend per.
                    </p>
                </div>
            </div>
        </Card>
        <Card className='card-body'>
            <div className='card6'>
                <div className='card-header'>Team</div>
                <div className='textarea'>
                    <p>
                        Donec venenatis facilisi fermentum. Morbi class est lorem pharetra pretium diam nisi, in varius sed sollicitudin. Amet ipsum sociosqu himenaeos volutpat quis porta, integer vehicula massa mi eu magna. Feugiat ullamcorper per venenatis facilisi bibendum cursus tincidunt facilisis duis bibendum dignissim? Orci porttitor enim vulputate viverra sit vulputate dictum ridiculus eleifend per.
                    </p>
                </div>
                <div className='team-card'>
                <ActionAreaCard src={team1} name="John Smith"></ActionAreaCard>
                <ActionAreaCard src={team2} name="Elina Williams"></ActionAreaCard>
                <ActionAreaCard src={team3} name="John Smith"></ActionAreaCard>
                </div>
            </div>
        </Card>
        </Container>
    )
}

export default Cards;