function Editor (props){
    return (
        <div className="container">
            <div className="titleContainer"><i class="fas fa-code"></i><h2>Editor</h2></div>
            <textarea id="editor" value={props.value} onChange={props.onChange}></textarea>
        </div>
    )
}

export default Editor