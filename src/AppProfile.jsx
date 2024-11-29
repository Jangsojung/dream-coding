import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event); // SyntheticBaseEvent: 브라우저에서 발생한 이벤트를 리액트에서 처리할 수 있는 이벤트로 감싸서 전달
    alert('버튼이 클릭 됨!');
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      {/* 함수의 참조값인 이름만 전달해야 handleClick이 참조하는 함수 호출.
      handleClick()은 함수 호출. 함수 실행 후 반환값이 onClick에 할당 됨. */}
      <form onSubmit={() => {}}>
        <input />
      </form>

      <Avatar
        image='https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna Young'
        title='백엔드 개발자'
        isNew={false}
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob Yu'
        title='프론트엔드 개발자'
      />
    </>
  );
}

export default AppProfile;
