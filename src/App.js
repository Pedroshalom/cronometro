import React from 'react';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    showTimer: false,
  }
  
  toggleTimer = () => {
    const { showTimer } = this.state;
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  console.log(showTimer);
  }

render() {
  const { showTimer } = this.state;
  return(
    <header>
    <div>
        <header>
       <h1 className='cabecalho'>Cronômetro</h1>
        </header>
          <div>
            {showTimer && <Timer />}
          <button className='btn' type="button" onClick={ this.toggleTimer }>
            {showTimer ? 'Desligar timer ' : 'Ligar Timer'}
          </button>
          </div>
    </div>
    </header>
  )
}
}

export default App;
