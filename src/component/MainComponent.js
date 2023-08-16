import React from 'react'
import Header from './header'
import Reviews from './reviews'
import Benefits from './benefits'
import Pricing from './pricing'
import Faq from './faq'
import Footer from './footer'

function MainComponent() {
    return (
        <>
            <div>
                <Header />
                <Benefits />
                <Reviews />
                <Pricing />
                <Faq />
                <Footer />
            </div>
        </>
    )
}

export default MainComponent