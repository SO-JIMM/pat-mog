import React from 'react'
import CanvasPage from './component/CanvasPage.Component'
import Header from './component/Header.Component'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CanvasPage />
      </div>
    )
  }
}

export default App
