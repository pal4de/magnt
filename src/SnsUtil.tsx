import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as FaBrands from "@fortawesome/free-brands-svg-icons";

type SnsProps = {
  id: string,
  displayName?: string,
};
export type AccountInfo = SnsProps & {type: string};
type SnsState = {};
export abstract class Sns extends React.Component<SnsProps, SnsState> {
  render() {
    return (
      <li><a href={this.url} target="blank">
        {this.icon}
        <span className="id">{this.props.displayName ?? this.props.id}</span>
      </a></li>
    )
  }
  abstract faIcon: FaBrands.IconDefinition;
  abstract get url(): string;
  get icon() {
    return <FontAwesomeIcon icon={this.faIcon} />
  };

  static classList: {[name: string]: typeof Sns} = {};
  static register(name: string, cls: typeof Sns) {
    this.classList[name] = cls;
  }
  static concrete(name: string) {
    if (name in this.classList) {
      return this.classList[name];
    } else {
      throw new Error(`couldn't found sns type '${name}'`);
    }
  }
}

class Twitter extends Sns {
  faIcon = FaBrands.faTwitter;
  get url() {
    return `https://twitter.com/${this.props.id}`;
  }
}
Sns.register('twitter', Twitter);

class Instagram extends Sns {
  faIcon = FaBrands.faInstagram;
  get url() {
    return `https://www.instagram.com/${this.props.id}/`;
  }
}
Sns.register('instagram', Instagram);

class Facebook extends Sns {
  faIcon = FaBrands.faFacebook;
  get url() {
    return `https://www.facebook.com/${this.props.id}/`;
  }
}
Sns.register('facebook', Facebook);

class Soundcloud extends Sns {
  faIcon = FaBrands.faSoundcloud;
  get url() {
    return `https://www.facebook.com/${this.props.id}/`;
  }
}
Sns.register('soundcloud', Soundcloud);

class Youtube extends Sns {
  faIcon = FaBrands.faSoundcloud;
  get url() {
    return `https://www.youtube.com/channel/${this.props.id}`;
  }
}
Sns.register('youtube', Youtube);

class Github extends Sns {
  faIcon = FaBrands.faGithub;
  get url() {
    return `https://github.com/${this.props.id}`;
  }
}
Sns.register('github', Github);

class Website extends Sns {
  faIcon = FaBrands.faFontAwesome; //暫定
  get url() {
    return this.props.id;
  }
}
Sns.register('website', Website);
