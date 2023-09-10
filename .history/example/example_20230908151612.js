console.log(window);
const {ChromeTipCom, React, ReactDOM} = window;

class App extends React.Component {
    render() {
        return (
            <div>
                <ChromeTipCom />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
