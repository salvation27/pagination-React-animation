// import { useEffect,useState } from 'react';
import './App.css';
import ReactImageMagnify from 'react-image-magnify';
import big from './1.jpg'
import small from './2.jpg'

function App() {
  return (
    <div className="App">
<div style={{width:'620px'}}>
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: small
    },
    largeImage: {
        src: big,
        width: 1024,
        height: 683
    }
}} />
</div>
    </div>
  );
}

export default App;
