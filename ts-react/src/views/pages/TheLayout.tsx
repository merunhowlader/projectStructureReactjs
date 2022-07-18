import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

const TheLayout = () => {
    return (
        <div>
            <div><Header/></div>
            <main>body</main>
            <div><Footer/> </div>
        </div>
    );
};

export default TheLayout;