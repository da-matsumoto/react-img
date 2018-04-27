import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style.js'

class ShowImage extends React.Component {
    render () {
        return (
        <div>
            <p>hello</p>
            <img src="../public/img/icon.png" />
        </div>
        )
    }
}

ReactDOM.render(
    <ShowImage />,document.getElementById('root')
)