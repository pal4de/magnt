import React, {FC} from 'react';
import './App.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as FaBrands from "@fortawesome/free-brands-svg-icons";

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
  ]
}

function App() {
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
  sns: SnsInfo[],
};

type SnsInfo = {
  type: SnsType,
  id: string,
  // 非公開アカウントはクライアントで処理しない！！！！
};
const snsTypeList = [
  'twitter',
  'instagram',
  'facebook',
  'soundcloud',
  'youtube',
  'github',
] as const;
type SnsType = typeof snsTypeList[number];

const Profile: FC<{data: ProfileProps}> = (props) => {
  return (
    <div className="Profile">
      <ProfileImage src={props.data.image} />
      <ProfileName name={props.data.name} />
      <ProfileBio bio={props.data.bio} />
    </div>
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

const SnsList: FC<{sns: SnsInfo[]}> = (props) => {
  return (
    <ul className="SnsList">
      {props.sns.map((snsInfo: SnsInfo, index: number) => {
        return (
          <li key={index}><a href="#dummy" target="blank">
            <SnsIcon type={snsInfo.type} />
            <span className="id">{snsInfo.id}</span>
          </a></li>
        );
      })}
    </ul>
  )
};
const SnsIcon: FC<{type: SnsType}> = (props) => {
  type FaBrandsMap = {[P in SnsType]: FaBrands.IconDefinition};
  const mapper: FaBrandsMap = { // SNS毎にクラスを定義するべき
    twitter: FaBrands.faTwitter,
    facebook: FaBrands.faFacebook,
    github: FaBrands.faGithub,
    soundcloud: FaBrands.faSoundcloud,
    instagram: FaBrands.faInstagram,
    youtube: FaBrands.faYoutube,
  }
  return <FontAwesomeIcon icon={mapper[props.type]} />
}

export default App;
