import React from 'react';


class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100,
        }
    }
    
    clickMe(){
        this.setState({
            clicks: this.state.clicks + 5,
            totalRemaining: this.state.totalRemaining - 5
        })
        console.log("I clicked", this.props.name)
    }

    render() {
      return (
        <div>
            <h1 onClick={() => this.clickMe()}>Why {this.props.name} no like me?</h1>
            <span>
                {this.state.clicks} is the number of clicks. {this.state.totalRemaining}
            </span>
        </div>
        
      )
    }
}

export default Item;