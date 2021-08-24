import './App.css';
import react from 'react';
import HeaderComponent from './Component/HeaderComponent';
import SliderComponent from './Component/SliderComponent';
import FooterComponent from './Component/FooterComponent';

class App extends react.Component{

  render(){
    return(
    <div>
      <HeaderComponent/>
      <main>
        <SliderComponent/>
      </main>
      <FooterComponent/>     
    </div>
    );
  }

}
export default App;
