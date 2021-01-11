import React from 'react';
import * as Sns from './Sns';
import './App.scss';

const exampleProfile: ProfileProps = {
  name: "pal4de",
  image: "example/profile_image.png",
  bio: "hello there",
  sns: [
    {
      type: 'twitter',
      id: 'pal4de',
    },
    {
      type: 'github',
      id: 'pal4de',
    },
    {
      type: 'website',
      id: 'https://www.notion.so/pal4de/f62744f9d8ff431ab9e54349826330af',
      displayName: 'Notion',
    },
  ]
}

const App = () => {
  return (
    <div className="App">
      <header><span className="logo">Magnt</span></header>
      <div className="UserPage">
        <Profile data={exampleProfile} />
        <SnsList sns={exampleProfile.sns} />
      </div>
    </div>
  );
}

type ProfileProps = {
  name: string,
  image: string,
  bio: string,
  sns: Sns.AccountInfo[],
};
const Profile: React.FC<{data: ProfileProps}> = (props) => {
  return (
    <div className="Profile">
      <ProfileImage src={props.data.image} />
      <ProfileName name={props.data.name} />
      <ProfileBio bio={props.data.bio} />
    </div>
  );
};
const ProfileImage: React.FC<{src: string}> = (props) => {
  const style: React.CSSProperties = {
    backgroundImage: `url(${props.src})`
  };
  return <div className="ProfileImage" style={style} />;
};
const ProfileName: React.FC<{name: string}> = (props) => {
  return <h3 className="ProfileName">{props.name}</h3>;
};
const ProfileBio: React.FC<{bio: string}> = (props) => {
  return <div className="ProfileBio">{props.bio}</div>;
};

const SnsList: React.FC<{sns: Sns.AccountInfo[]}> = (props) => {
  return (
    <ul className="SnsList">
      {props.sns.map((snsInfo: Sns.AccountInfo, index: number) => {
        const ConcreteSns = Sns.AbstractSns.concrete(snsInfo.type);
        return (
          <ConcreteSns key={index} id={snsInfo.id} displayName={snsInfo.displayName} />
        );
      })}
    </ul>
  )
};

export default App;
