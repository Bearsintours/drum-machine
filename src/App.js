import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.audioRefs = [];
    this.displayRef = 'test';
    this.state = {
      audio: [
        {
          id: 'Q',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          description: 'Heater-1',
          key: 'KeyQ'
        },
        {
          id: 'W',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          description: 'Heater-2',
          key: 'KeyW'
        },
        {
          id: 'E',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          description: 'Heater-3',
          key: 'KeyE'
        },
        {
          id: 'A',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          description: 'Heater-4',
          key: 'KeyA'
        },
        {
          id: 'S',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          description: 'Heater-6',
          key: 'KeyS'
        },
        {
          id: 'D',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          description: 'Dsc_Oh',
          key: 'KeyD'
        },
        {
          id: 'Z',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          description: 'Kick_n_Hat',
          key: 'KeyZ'
        },
        {
          id: 'X',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          description: 'RP4_KICK_1',
          key: 'KeyX'
        },
        {
          id: 'C',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          description: 'Cev_H2',
          key: 'KeyC'
        }
      ],
      display: ''
    }
    
    this.setRef = (ref) => {
      this.audioRefs.push(ref)
    }

    this.play = (idx) => {
      this.audioRefs[idx].play();
      this.setState((state) => {
        return {display: state.audio[idx].description};
      });
    }

    this.playOnKeyDown = (e) => {
      this.state.audio.forEach((el, idx) => {
        if(e.code === el.key){
          this.play(idx)
        }
      })
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.playOnKeyDown)
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum">
          {this.state.audio.map((pad, idx) => (
            <div 
              key={pad.id} 
              id={pad.description}
              className="drum-pad" 
              onClick={() => this.play(idx)}
              >
              {pad.id}
              <audio 
                ref={this.setRef} 
                id={pad.id} 
                className="clip"
                src={pad.url}>
              </audio>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
