import React from 'react';

class Formulaire extends React.Component {
    render(){
        return(
          <p className="user-message">
            {this.props.pseudo} : mon message lalala 
          </p>
        )
    }
}
export default Formulaire;