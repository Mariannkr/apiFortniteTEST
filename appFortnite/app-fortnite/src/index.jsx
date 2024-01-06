/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import Shop from './template/shop';

const Index = () => {
  return (
    <div>
      <Shop />
    </div>
  );
};

export default Index;

const root = createRoot(document.getElementById('root'));
root.render(<Index />);
