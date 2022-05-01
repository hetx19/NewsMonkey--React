import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color='#FF0000' progress={progress} />
        <Switch>
          <Route exact path={'/'}><News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path={'/business'}><News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path={'/entertainment'}><News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path={'/general'}><News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path={'/health'}><News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path={'/science'}><News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path={'/sports'}><News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path={'/technology'}><News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )

}

export default App;