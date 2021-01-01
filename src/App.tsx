import React from 'react';
import './App.scss';
import ProfileImageExample from './resource/nadegata_2.png';

function App() {
  return (
    <div className="App">
      <ProfileImage src={ProfileImageExample} />
    </div>
  );
}

const ProfileImage: React.FC<{src: string}> = (props) => {
  return <img className="ProfileImage" src={props.src} alt="プロフィール画像" />;
}

export default App;
