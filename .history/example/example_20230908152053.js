console.log(window);
const {ChromeTipCom, React, ReactDOM} = window;

// class App extends React.Component {
//     render() {
//         return <ChromeTipCom />;
//     }
// }

ReactDOM.render(<ChromeTipCom />, document.getElementById('container'));
