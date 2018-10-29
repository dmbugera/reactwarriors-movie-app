import React, {Component} from 'react';
import CallApi from '../../../api/api'

export default class MoviePage extends Component {
    constructor() {
        super();

        this.state = {
            movie: null
        };
    }
    
    //tut state 
    componentDidMount (){
        console.log(this.props.match.params.id )

        CallApi.get(`/movie/${this.props.match.params.id}`)
            .then(data => {
                console.log(data)
                this.setState({
                    movie: data
                })

            })
    }
    render() {

        return (
            this.state.movie && (
            <div>
                  <div className="container">
                    <div className="col-4">
                        <img src={this.state.movie.poster_path} alt={this.state.movie.original_title}/>
                    </div>
                    <div className="col-8">
                        <h3>{this.state.movie.original_title}</h3>
                        <h5>{this.state.movie.vote_average}</h5>
                        <p>{this.state.movie.overview}</p>
                    </div>
                </div>
            </div>)
        );
    }
}


