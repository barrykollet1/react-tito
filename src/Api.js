import React from "react";


class App extends React.Component {

    state = {
        data:[]
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then((reultat) => reultat.json())
            .then((resultat) => {
                this.setState({
                    data: resultat
                })
                }
            )
    }

    render() {
        const {data} = this.state

        const resultat = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
            }
        )
        return(
            <div className="container">
                <ul>
                    {resultat}
                </ul>
            </div>
        )
    }
}

export default App