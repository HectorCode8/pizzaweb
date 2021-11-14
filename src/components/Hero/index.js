import React, {useState} from 'react'
import Navbar from  '../NavBar/index'
import Sidebar from '../Sidebar/index'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
      };

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
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