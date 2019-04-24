import React from 'react'
import {connect} from 'react-redux'
import {AddUp} from '../actions'

import {Link} from 'react-router-dom'

class Home extends React.Component{

    render(){
        console.log(this)
        return(<div>
            Count: {this.props.app.count}
            <button onClick={()=>this.props.AddUp()}>Add Up</button>
            <Link to="/upload">Upload screen</Link>
        </div>)
    }
}

const mapStateToProps = (state) =>({
    app: state.app
})

export default connect(mapStateToProps, {AddUp})(Home)