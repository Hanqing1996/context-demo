import React, { Component } from 'react'
const NContext = React.createContext();

class F1 extends React.Component {
    render() {
        return (
            <NContext.Provider value={1000}>
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