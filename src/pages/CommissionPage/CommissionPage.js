import React from 'react'
import './CommissionPage.scss'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Сommission1 } from '../../components/Сommission1/Сommission1';

export const CommissionPage = () => {
    return(
        <>
        <Header />
        <main>
          <div className="container">
        <Сommission1 />
          </div>
        </main>
        <Footer />
      </>
    )
}
