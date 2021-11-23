import React from 'react'

class GifSearch extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            query: ""
        }

    }

    handleChnage = (event) => {
        this.setState({
            query: event.target.value
        })

    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchGifs(this.state.query)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h5>Enter a Search Term:</h5>
                <input type="text" name="query" onChange={this.handleChnage} value={this.state.query} />
                <input type="submit" value="Find Gifs" />
            </form>

        )
    }

}

export default GifSearch