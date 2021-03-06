import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar  from 'material-ui/AppBar'

import './index.css'

import PageArtists from '../PageArtists'
import PageAlbums from '../PageAlbums'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section className="App">

          <Router>
            <section>
              <Route exact path="/" component={PageArtists} />
              <Route path="/albums/:id" component={PageAlbums} />
            </section>
          </Router>

        </section>
      </MuiThemeProvider>
    )
  }
}

export default App
