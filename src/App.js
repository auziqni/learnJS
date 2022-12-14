function Biodata(props) {
    return <span>umur {props.umur}</span>;
}
function Panggilnama(props) {
    return (
        <h1>
            hallo juga {props.nama}, sebagai seorang {props.profesi},{" "}
            <Biodata umur={props.umur} />
        </h1>
    );
}
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> hello world</h1>
                <Panggilnama nama="auziqni" profesi="programmer" umur="23" />
                <Panggilnama nama="ziqni" profesi="guru" umur="23" />
            </header>
        </div>
    );
}

export default App;
