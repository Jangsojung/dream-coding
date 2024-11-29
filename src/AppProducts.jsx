import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div className='container'>
      {showProducts && <Products />} {/* toggle 될 때 Products의 useEffect 호출 됨 */}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>{' '}
    </div>
  );
}
