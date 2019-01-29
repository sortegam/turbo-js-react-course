// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';

import CreditCard from './components/CreditCard';
import StatelessExample from './components/StatelessExample';
import StatefulExample from './components/StatefulExample';
import CreditCardTypes from './components/CreditCard/CreditCardTypes';
import ComponentDidMountExample from './components/ComponentDidMountExample';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  ecmascriptPast: require('../assets/ecmascript-past.jpg'),
  stagesJS: require('../assets/stages.svg'),
  babel: require('../assets/babel.png'),
  nodejs: require('../assets/nodejs.svg'),
  npm: require('../assets/npm.png'),
  webpackLogo: require('../assets/webpack-logo.png'),
  webpackAssets: require('../assets/webpack-assets.png'),
  frameworks: require('../assets/frameworks.jpg'),
  pipeline: require('../assets/pipeline.png'),
  reactLogo: require('../assets/react-logo.png'),
  semanticReact: require('../assets/semantic-react.png'),
  redux: require('../assets/redux.png'),
  flux: require('../assets/flux.png'),
  reduxConcept: require('../assets/redux-concept.jpg'),
  reduxAnimation: require('../assets/redux-animation.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={300} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TURBO FRONTEND COURSE
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            JS Frontend Ecosystem Introduction
          </Text>
          <Text margin="100px 0 0" style={{ fontSize: '24px' }}>
            by @sortegam
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">
            Introduction
            <sup style={{ fontSize: 30,
              top: -50 }}
            >JS</sup>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            Javascript === ECMAScript
          </Heading>
          <Image src={images.ecmascriptPast} width={800} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            Javascript Stages
          </Heading>
          <Image src={images.stagesJS} width={800} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 100px 0">
            Interesting Links
          </Heading>
          <Link href="https://github.com/tc39/proposals" textColor="tertiary">
            https://github.com/tc39/proposals
          </Link>
          <br />
          <br />
          <br />
          <Link href="http://kangax.github.io/compat-table/es2016plus/" textColor="tertiary">
            http://kangax.github.io/compat-table/es2016plus/
          </Link>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            > ES6 Features
          </Heading>
          <List>
            <ListItem>Default Function Parameters</ListItem>
            <ListItem>Template Literals</ListItem>
            <ListItem>Multi-line Strings</ListItem>
            <ListItem>Destructuring Assignment</ListItem>
            <ListItem>Spread operator</ListItem>
            <ListItem>Arrow Functions</ListItem>
            <ListItem>Promises</ListItem>
            <ListItem>Modules</ListItem>
            <ListItem>Classes (Prototype based under the hood)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            Babel Transpilation
          </Heading>
          <Image src={images.babel} width={800} />
          <Link href="https://babeljs.io/repl">https://babeljs.io/repl</Link>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 60px 0">
            Server Side Javascript & Tooling
          </Heading>
          <Image src={images.nodejs} width={500} />
          <br />
          <Link href="https://nodejs.org">https://nodejs.org</Link>
          <br />
          <br />
          To install use:{' '}
          <Link href="https://github.com/creationix/nvm">https://github.com/creationix/nvm</Link>
        </Slide>
        <Slide>
          <Image src={images.npm} width={500} />
          <br />
          <List>
            <ListItem>Tool</ListItem>
            <ListItem>Website</ListItem>
            <ListItem>Package Repository</ListItem>
          </List>
          <br />
          <Link href="https://www.npmjs.com/">https://www.npmjs.com/</Link>
        </Slide>
        <Slide>
          <Image src={images.webpackLogo} width={500} />
          <Image src={images.webpackAssets} width="100%" />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            Frontend Frameworks
          </Heading>
          <Image src={images.frameworks} width={1300} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" margin="0 0 40px 0">
            Our Pipeline overview
          </Heading>
          <Image src={images.pipeline} width={1300} />
        </Slide>
        <Slide>
          <Image src={images.reactLogo} width={700} />
        </Slide>
        <Slide>
          <Image src={images.semanticReact} width={1200} />
        </Slide>
        <Slide>
          <Heading size={1} margin="0 0 80px 0">
            JSX
          </Heading>
          <Heading size={6} margin="0 0 80px 0">
            XML/HTML-like syntax used by React to extend ECMAScript to coexist with JS/React code.
          </Heading>
          <Link href="https://babeljs.io/repl">https://babeljs.io/repl</Link>
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 50px 0">
            Component Example
          </Heading>
          <CreditCard
            pan="4111111111111111"
            cardHolder="Sergi Ortega M."
            expMonth="06"
            expYear="25"
            type={CreditCardTypes.MASTER_CARD}
            ccv="123"
          />
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 50px 0">
            Example Stateless Component
          </Heading>
          <div
            style={{
              border: '3px solid #0e8fc2',
              padding: 40
            }}
          >
            <StatelessExample />
          </div>
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 50px 0">
            Example Stateful Component
          </Heading>
          <div
            style={{
              border: '3px solid #0e8fc2',
              padding: 40
            }}
          >
            <StatefulExample />
          </div>
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 50px 0">
            React Component Lifecycle Methods
          </Heading>
          <List>
            <ListItem>componentDidMount()</ListItem>
            <ListItem>static getDerivedStateFromProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 50px 0">
            Component with Lifecycle methods example
          </Heading>
          <div
            style={{
              border: '3px solid #0e8fc2',
              padding: 40
            }}
          >
            <ComponentDidMountExample />
          </div>
        </Slide>
        <Slide>
          <Heading size={1} margin="0 0 50px 0">
            Advanced Topics
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} margin="0 0 50px 0">
            FLUX
          </Heading>
          <Image src={images.flux} width={1300} />
        </Slide>
        <Slide>
          <Image src={images.redux} width={1300} />
        </Slide>
        <Slide>
          <Image src={images.reduxConcept} width={1300} />
        </Slide>
        <Slide>
          <Image src={images.reduxAnimation} width={1300} />
        </Slide>
        <Slide>
          <Heading size={1}>
            REDUX DEMO
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
