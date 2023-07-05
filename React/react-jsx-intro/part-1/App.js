const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Batman"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
