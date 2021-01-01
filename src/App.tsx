import React, {FC} from 'react';
import './App.scss';
// import profileImageExample from './resource/nadegata_2.png';

const exampleProfile: ProfileProps = {
  name: "pal4de",
  image: "example/profile_image.png",
  bio: "hello there",
}

function App() {
  return (
    <div className="App">
      <Profile data={exampleProfile} />
    </div>
  );
}

type ProfileProps = {
  name: string,
  image: string,
  bio?: string,
};
const Profile: FC<{data: ProfileProps}> = (props) => {
  return (
    <header className="Profile">
      <ProfileImage src={props.data.image} />
      <ProfileName name={props.data.name} />
      {props.data.bio && <ProfileBio bio={props.data.bio} />}
    </header>
  );
};

const ProfileImage: FC<{src: string}> = (props) => {
  const style: React.CSSProperties = {
    backgroundImage: `url(${props.src})`
  };
  return <div className="ProfileImage" style={style} />;
};

const ProfileName: FC<{name: string}> = (props) => {
  return <h3 className="ProfileName">{props.name}</h3>;
};

const ProfileBio: FC<{bio: string}> = (props) => {
  return <div className="ProfileBio">{props.bio}</div>;
};

export default App;
