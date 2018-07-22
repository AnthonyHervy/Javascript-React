import React,{Component} from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchText:"",
            placeHolder:"Quel film recherchez-vous ?",
            intervalBeforeRequest:1000,
            lockRequest: false
        }
    }

    handleChange(event){
        this.setState({searchText:event.target.value});
        if(!this.state.lockRequest){ // si le verrou est ouvert
            this.setState({lockRequest:true})
            setTimeout(function(){this.search()}.bind(this),this.state.invervalBeforeRequest)
        } 
    }

    search(){
        this.setState({lockRequest:false});
        this.props.callback(this.state.searchText);
    }

    handleOnClick(event){
       {this.search()};
    }



    render(){
        return (
        <div className="row">
            <div className="col-md-12 input-group">
             <input type="text" className="form-control input" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
            <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
            </span>
            </div>
        </div>
        )
    }



}


export default SearchBar;