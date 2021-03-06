import React, { Component } from 'react';
import SearchBar from '../components/search-bar.js';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';
import axios from 'axios';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
const API_KEY = "3cb8e8d1c88ffed4954200ce629b3ef7";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { movieList: {}, currentMovie: {} }
    }

    componentWillMount() {
        this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}${API_KEY}`).then(function (response) {
            this.setState({ movieList: response.data.results.slice(1, 6), currentMovie: response.data.results[0] }, function () {
                this.applyVideoToCurrentMovie();
            });
        }.bind(this));
    }

    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?api_key=${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
            if(response.data.videos.results[0] && response.data.videos.results[0].key){ 
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({ currentMovie: newCurrentMovieState });
            }
        }.bind(this));
    }

    onClickListItem(movie) {
        this.setState({ currentMovie: movie }, function () {
            this.applyVideoToCurrentMovie();
            this.setRecommandation();
        });
    }

    onClickSearch(searchText){
        axios.get(`${API_END_POINT}${SEARCH_URL}&api_key=${API_KEY}&query=${searchText}`).then(function (response) {
            if(response.data && response.data.results[0]){
                if(response.data.results[0].id != this.state.currentMovie.id){
                    this.setState({currentMovie: response.data.results[0]},() => {
                        this.applyVideoToCurrentMovie();
                        this.setRecommandation();
                    })
                }
            }
        }.bind(this));
    }

    setRecommandation(){
        //
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?api_key=${API_KEY}&language=fr`).then(function(response) {
            this.setState({ movieList: response.data.results.slice(0, 5)});
        }.bind(this));
    }

    render() {
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5) {
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)} />
            }
        }
        return (
            <div>
                <div className="search_bar">
                    <SearchBar callback={this.onClickSearch.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video videoId={this.state.currentMovie.videoId} />
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
                    </div>
                    <div className="col-md-4">
                        {renderVideoList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;