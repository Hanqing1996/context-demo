import React, { Component } from 'react'
const NContext = React.createContext();

class F1 extends React.Component {
    constructor() {
        super()
        this.state = {
            n: 1000,
            authority: () => {
                this.setState({
                    ...this.state,
                    n: 2000
                })
            }
        }
        this.change=()=>{
            this.setState({
                ...this.state,
                n: 3000
            })
        }
    }
    render() {
        return (
            <NContext.Provider value={this.state}>
                <F2 />
                <button onClick={this.change}>F1 change n</button>  
            </NContext.Provider>
        );
    }
}

function F2() {
    return (
        <div>
            <F3 />
        </div>
    );
}

function F4(props) {
    return (
        <div>
            {props.n4}
            <button onClick={props.authority}>F4 change n</button>
        </div>
    );
}
class F3 extends React.Component {

    render() {
        return (
            <NContext.Consumer>
                {state => <F4 n4={state.n} authority={state.authority} />}
            </NContext.Consumer>
        )
    }
}
export default F1