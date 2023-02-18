import React from 'react';
import Banner from './Banner/Banner';
import BigCompany from './BigCompanys/BigCompanys';
import Experiences from './Experiences/Experiences';
import Freshers from './Freshers/Freshers';
import WorldwideCompanies from './WorldwideCompanies/WorldwideCompanies';


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Freshers></Freshers>
           <Experiences></Experiences>
           <BigCompany></BigCompany>
           <WorldwideCompanies></WorldwideCompanies>
        </div>
    );
};

export default Home;