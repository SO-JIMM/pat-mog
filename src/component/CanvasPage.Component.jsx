import React from 'react'

class CanvasPage extends React.Component {
  constructor() {
    super()

    this.state = {
      isDown: false,
      strokeHits: [],
      hitSets: []
    }
  }

  pointerDown = () => {
    this.setState({ isDown: true })
  }

  pointerUp = () => {
    this.setState({ isDown: false })
    if (this.state.strokeHits.length === 0) {
      return
    } else {
      this.saveStroke()
    }
  }

  pointerOver = e => {
    e.persist()
    const hitArea = e.target.textContent

    if (!this.state.isDown) {
      return
    } else {
      this.setState(prevState => ({
        strokeHits: prevState.strokeHits.concat(` ${hitArea}`)
      }))
    }
  }

  pointerLeave = () => {
    this.setState({
      isDown: false
    })
  }

  saveStroke = () => {
    this.setState(prevState => ({
      hitSets: prevState.hitSets.concat([prevState.strokeHits]),
      strokeHits: []
    }))
  }

  render() {
    return (
      <div
        className="CanvasPage"
        onPointerLeave={this.pointerLeave}
        onPointerUp={this.pointerUp}
        onPointerDown={this.pointerDown}
      >
        <div className="canvas-container">
          <svg
            width="480"
            height="654"
            viewBox="0 0 127 173.0375"
            version="1.1"
            id="mog-svg"
          >
            <g id="layer1" onPointerOver={this.pointerOver}>
              <path
                d="m 53.790683,60.271487 -2.160268,-0.648081 -1.296162,1.296162 2.376295,2.592322 1.080135,-0.432052 z"
                id="Left_Eye"
              >
                <title>Left Eye</title>
              </path>
              <path
                d="m 67.832427,66.320241 -2.376294,0.432051 -0.864108,0.864108 1.944243,1.080135 1.94424,-0.864108 z"
                id="Right_Eye"
              >
                <title>Right Eye</title>
              </path>
              <path
                d="m 100.66851,91.811408 -8.209024,3.456429 -1.296159,11.881473 7.560939,-9.073125 7.128884,-0.864108 11.44942,3.240403 5.6167,-3.024376 -6.91286,-3.888483 -11.44942,-3.024375 z"
                id="Tail"
              >
                <title>Mog Tail</title>
              </path>
              <path
                d="m 57.463139,126.3757 -5.40067,-1.72822 -2.808351,2.80836 4.104511,3.2404 3.888483,-1.29616 z"
                id="Mog_Feets__Right_"
              >
                <title>Right Sock</title>
              </path>
              <path
                d="m 46.44577,113.84614 4.752591,4.75259 -3.672456,4.10451 -6.264778,-2.80834 z"
                id="Mog_Feets__Left_"
              >
                <title>Left Sock</title>
              </path>
              <path
                d="m 84.682522,49.686172 -10.801342,4.752592 -1.080135,2.160267 5.40067,5.832726 z"
                id="Ear__Right_"
              >
                <title>Right Ear</title>
              </path>
              <path
                d="m 58.11122,48.822064 -9.721207,3.240405 2.808348,-15.553933 z"
                id="Ear__Left_"
              >
                <title>Left Ear</title>
              </path>
              <path
                d="m 55.086845,70.856802 5.184642,1.728216 -1.512186,6.048751 -7.56094,-1.512187 0.864108,-5.400672 z"
                id="Lil_Snoot"
              >
                <title>Lil Snoot</title>
              </path>
              <path
                d="m 42.989341,76.905555 7.776966,4.752589 13.177637,1.080135 -3.672457,16.634066 -14.473798,2.376295 -4.968616,-11.665448 z"
                id="Fluffy_Chest"
              >
                <title>Floof Chest</title>
              </path>
              <path
                d="m 55.95095,106.93328 10.153264,5.83273 -8.857102,16.63407 -5.184643,-4.7526 3.672457,-3.67245 z"
                id="Right_Leggy"
              >
                <title>Right Leggy</title>
              </path>
              <path
                d="m 46.44577,113.84614 4.752591,4.75259 0.432054,-10.15326 -5.832726,-6.69683 z"
                id="Left_Leggy"
              >
                <title>Left Leggy</title>
              </path>
              <path
                d="m 61.567649,50.118226 -11.881477,4.320538 8.425048,5.400669 12.745582,2.592324 -1.512186,-11.017369 z"
                id="Lil_Head_Boop"
              >
                <title>Lil Head Boop</title>
              </path>
              <path
                d="m 77.985688,66.536268 12.745585,9.721206 1.94424,15.985985 -8.641072,-1.512186 -7.344913,-8.641075 z"
                id="Back"
              >
                <title>Back</title>
              </path>
              <path
                d="m 74.745285,109.52561 9.505183,-17.930229 8.641072,1.728213 -3.672456,16.850096 -3.024376,11.23339 -19.65844,6.26478 -4.536565,-1.94424 5.616697,-7.34491 6.696832,-5.83273 z"
                id="Right_Hind_Leg"
              >
                <title>Right Hind Leg</title>
              </path>
              <path
                d="m 77.769661,97.644131 -7.560937,12.745579 -7.344913,-11.449417 4.536562,-16.202014 7.992993,1.512189 6.696832,9.073126 z"
                id="Central_Mog_District"
              >
                <title>Central Mog District</title>
              </path>
              <path
                d="m 68.048454,71.504883 -6.912859,1.512189 0.864108,5.40067 11.881477,-3.672457 -2.376297,-3.672456 z"
                id="Cheeky_Cheeks__Right_"
              >
                <title>Right Cheeky-Cheek</title>
              </path>
              <path
                d="m 46.44577,63.727917 -1.296162,5.832726 4.536564,3.672456 2.592322,-4.752591 z"
                id="Cheeky_Cheek__Left_"
              >
                <title>Left Cheeky-Cheek</title>
              </path>
            </g>
          </svg>
        </div>
        <div className="toolbar">
          <div id="pat-box">
            <h2>Current Pat:</h2>
            <p>{this.state.strokeHits.toString()}</p>
          </div>
          <br></br>
          <div id="stroke-box">
            <h2>Stroke:</h2>
            {this.state.hitSets.map(hit => (
              <li key={hit}>{hit.toString()}.</li>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CanvasPage
