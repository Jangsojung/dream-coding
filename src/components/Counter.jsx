import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  //let num = 0; 안 된다
  // 변경 가능. 변경 시 화면 업데이트 해줘
  const [count, setCount] = useState(0); // 상태 값 접근 가능한 변수 value, 업데이트 가능한 function 리턴
  // count set 될 때 마다 자동으로 Counter() 함수 호출
  // setCount -> 내부 상태 변경 -> 해당 component 함수 전체 호출
  // + react는 가상의 dom 요소 사용 -> 변경된 내용만 update
  // useState 혹은 컴포넌트 내에서 아무리 호출 되어도 값을 기억 -> 0으로 초기화 되지 않음

  return (
    <div className='counter'>
      <p className='number'>
        {count} <span className='total'>/{total}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
          // js 클로져 관련.
          // count는 0이라고 저장 -> 1 그 다음도 0 + 1 = 1 결국 1만 증가
          // setCount((prev) => prev + 1); // prev 0
          // setCount((prev) => prev + 1); // prev 1
          // setCount((prev) => prev + 1); // prev 2
          //
        }}
      >
        Add +
      </button>
    </div>
  );
}
