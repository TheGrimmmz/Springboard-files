const App = () => {
    return (
        <div>
            <Person name="Batman" age="35" hobbies={['fighting crime', 'spending money', 'arguing with R&D']}/>
            <Person name="Old Wayne" age="70" hobbies={['sleeping', 'watching crime documentaries', 'enjoying peace and quiet']}/>
            <Person name="Young Wayne" age="12" hobbies={['going to a play with parents', 'crying in an alley', 'fighting crime']}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
