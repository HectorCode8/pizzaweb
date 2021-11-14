import React from 'react'
import Navbar from  '../NavBar/index'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>La mejor Pizza de Teocui</HeroH1>
                    <HeroP>Horneada al Momento</HeroP>
                    <HeroBtn>Contactanos</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero