import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json') //public/data 접근
      .then((res) => res.json())
      .then((data) => {
        console.log('데이터 네트워크에서 받아 옴');
        setProducts(data);
      });
    // => 무한 fetch 일어남: setProducts하면 useState() 되면 다시 Products 호출하고, setProducts 또 호출함의 반복
    // 처음에만 받아와야 함 - useEffect

    return () => {
      console.log('청소 완료');
    }; // 컴포넌트가 사라질때 호출되는 함수
  }, []); // 2번째 인자: dependency: [] : 처음 화면에만 호출

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
