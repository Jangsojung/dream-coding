import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`) //public/data 접근
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
  }, [checked]); // 2번째 인자: dependency: [] : 처음 화면에만 호출

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only Sale</label>
      <ul>
        {products.map(
          (
            product // list 자식들은 unique key가 있어야 워닝 안 뜸
          ) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          )
        )}
      </ul>
    </>
  );
}
