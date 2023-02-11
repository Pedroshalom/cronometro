import React, { Component } from 'react';
import bip from '../assets/bip.mp3'
class Timer extends Component {

      state = {
            time: 0,
            minutes: 0,
            seconds: 0,
            click: false,
            paused: false
          }
        
          handleChange = ({ target }) => {
            const { value } = target;
            this.setState({
              time: Number(value) * 60,
              input: Number(value) * 60
            },() => {
              setTimeout(() => {
                target.value = ''
              },10000)
            })
          }
        
          timer = () => {
            this.setState({ click: true })
            const { time, paused } = this.state;
            if(!this.Timer || (this.Timer && paused) ) { 
              if (time > 0)
                this.Timer = setInterval(() => { 
                  this.setState(({ time }) => ({
                    time: time - 1,
                    paused: false,
                  }))
                }, 1000)
            }
          }
        
          componentDidUpdate() {
            const { time, click } = this.state;
            if (time === 12 && click) {
              const audio = new Audio(bip);
              audio.play()
            }
            if (time < 0 && click) {
              clearInterval(this.Timer) 
              this.setState({time: 0})
              setTimeout(() => {
                this.setState({click: false })
              },2100)
            }
          }
        
          clear = () => {
            const { paused } = this.state;
            this.setState(({ paused }) =>({
              pause: !paused,
            }))
            if (paused){
              clearInterval(this.Timer) 
              this.timer()
              return
            }
            clearInterval(this.Timer) 
          }
        
          zerar = () => {
            clearInterval(this.Timer) 
            this.setState( { click: false , time: 0})
          }
            render(){
              const { time, click } = this.state;
              const minutes = Math.floor(time / 60) //pois se nao daria um numero quebrado por exemplo 4.98888 nos minutos , os segundos iriam permanecer normais
              const seconds = time % 60
              
            
                return(
                    <div className="time">
                  <input
                    name="totalTime"
                    type='number'
                    placeholder="Add seu tempo"
                    onChange={this.handleChange}
                  />
                <div className="timer">
                  <span>{minutes.toString().padStart(2, "0")}</span>
                  <span>:</span>
                  <span>{seconds.toString().padStart(2, "0")}</span>
                </div>
                <div className="App">
                  <div className="functions">
        
                    <button onClick={this.timer}>Iniciar</button>
        
                    {/* <button onClick={this.clear}>Pausar</button> */}
        
                    <button onClick={this.zerar}>Zerar</button>
        
                  </div>
        
                  </div>
                  {
                    time === 0 && click && <h4>Obrigado  :)</h4>
                  }
                    </div>
                )
            }
    }

export default Timer;