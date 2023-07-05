const App = () => {
    return (
        <div>
            <Tweet username="Batman" name="Bruce Wayne" message="I am Batman"/>
            <Tweet username="Superman" name="Clark Kent" message="I am the man of steel"/>
            <Tweet username="Flash" name="Barry Allen" message="I am faster then superman"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
