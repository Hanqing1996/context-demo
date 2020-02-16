import React, { Component } from 'react'
const NContext = React.createContext();

class F1 extends React.Component {
    constructor(){
        super()
        this.state={
            n:1000
        }
        setTimeout(()=>{
            this.setState({
                n:99
            })
        },3000)
    }
    render() {
        return (
            <NContext.Provider value={this.state.n}>
                <F2 />
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
        </div>
    );
}
class F3 extends React.Component {

    render() {
        return (
            <NContext.Consumer>
                {n => <F4 n4={n} />}
            </NContext.Consumer>
        )
    }
}
export default F1