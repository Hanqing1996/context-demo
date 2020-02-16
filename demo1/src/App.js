// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
import React, { Component } from 'react'
const ThemeContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="black">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function Button(props) {
  return (
    <div>
      {props.theme}
    </div>
  );
}

class ThemedButton extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
    )
  }
}
export default App