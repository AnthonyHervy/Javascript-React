import React from 'react';
import { render } from 'react-dom';
import './style/css/bootstrap.min.css';
import './index.css';
import { sampleText} from './sampleText';
import marked from 'marked';

class App extends React.Component {

    state = {
        text: sampleText
    };
 
    editText(event) {
        const text = event.target.value;
        this.setState({ text });
    }

    componentWillMount(){
        const localStorageText = localStorage.getItem('text');
        if (localStorageText){
            this.setState({ text: localStorageText});
        }
    }

    renderText(text){
        const renderText = marked(text, {sanitize:true});
        		// On place le rendu dans un objet pour se souvenir que c'est dangereux d'insérer du code dans le DOM.
        return { __html: renderText }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('text', nextState.text);
    }

    render() {
        return(
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                        <textarea 
                        value={this.state.text} 
                        rows="35" 
                        className="form-control"
                        onChange={(e) => this.editText(e)}>
                        </textarea>
                    </div>

                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
                    </div>

                </div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);