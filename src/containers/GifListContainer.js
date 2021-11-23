import React from 'react'

import GifSearch from '../components/GifSearch'

import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    constructor(){
        super()
    this.state = {
        gifs: []
    }
}

fetchGifs = (input = "cat") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=9kGMaikBINXizUjeUnMUOcTFOTy3Y1Oh&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

componentDidMount(){
    this.fetchGifs()
}


    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
 

}

export default GifListContainer