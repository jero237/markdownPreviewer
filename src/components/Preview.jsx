import { marked } from 'marked';


function Preview(props) {
    return (
        <div className="container">
            <div className="titleContainer"><h2>Previewer</h2></div>
            <div dangerouslySetInnerHTML={{__html: marked(props.value)}} id='preview'/>
        </div>)
}

export default Preview