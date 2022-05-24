import React from "react";

const TableHeader = () => {
    return(
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((value, index) =>
        <tr key={index}>
            <td>{value.name}</td>
            <td>{value.job}</td>
            <td><button onClick={()=>props.removeCharacter(index)}>Delete</button></td>
        </tr>
    )

    return <tbody>{rows}</tbody>
}

const Table = (props) => {

    const {characterData, removeCharacter} = props

    return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
}

export default Table