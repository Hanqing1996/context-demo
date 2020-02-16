import React, { Component } from 'react'

class App extends React.Component {
    render() {
        return (
            <Consumer>
                {n => <Box n2={n} />}
            </Consumer>
        );
    }
}


function Box(props) {
    return (
        <div>{props.n2}</div>
    )
}

class Consumer extends React.Component {
    constructor(props) {
        super(props)
        this.x = 33
        this.element = props.children(this.x)
    }
    render() {
        return (
            <div>
                {this.element}
            </div>
        )
    }
}



export default App