import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcons from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img 
                        src = {logoImg} 
                        alt = "logo proffy" 
                    />

                    <h2> Sua plataforma de estudos </h2>

                </div>
                
                    <img 
                        src= {landingImg} 
                        alt=" Texto kkk" 
                        className = "hero-image" 
                        />
            
                <div className = "buttons-container">
                    <a href=" " className="study">
                    <img src={studyIcon} alt="Estudar" />
                    Estudar
                    </a>
                
                    <a href=" " className="give-classes">
                    <img src={giveClassesIcons} alt="Dar aulas" />
                    Dar aulas 
                    </a>
                </div>

                <span className="total-connection">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>

            </div>
        </div>
    )
}


export default Landing;