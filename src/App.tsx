import React from 'react';
import {BasePictoCard, PictoCardGroup} from "./components/PictoCard";
import Img580x387 from "./assets/img/img-580x387.jpg";

const ExamplePictoCard = () => <BasePictoCard imgAttributes={{ src: Img580x387, alt: 'Img' }}>Title goes here</BasePictoCard>;

const App = () => <div>Hello, World!
    <PictoCardGroup>
        <ExamplePictoCard />
        <ExamplePictoCard />
        <ExamplePictoCard />
        <ExamplePictoCard />
    </PictoCardGroup>
</div>;

export default App;
