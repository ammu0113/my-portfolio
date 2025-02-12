import React, { createContext, useContext } from 'react';
import portfolioData from '../data/portfolio-data.json';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    console.log('portfolioData', portfolioData)
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}; 