import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import ContentContext from '../context/content-context';

class Root extends Component {

  render() {
    return (
      <Fragment>
        <ContentContext.Provider value={{
          main: [
            { id: 1, name: 'Developpeur Front-end' },
            { id: 2, name: 'Back-end' },
            { id: 3, name: 'Marketeur Digital' },
            { id: 4, name: 'Mes Projets' },
          ]
        }}>
          <Header />
          <Banner />
          <Home />
        </ContentContext.Provider>
        <Gallery />
        <Testimonials />
        <Footer />
      </Fragment>
    );
  }
}

export default Root;
