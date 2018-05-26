import React, {Component} from 'react';
import Item from '../Item/Item';

class AGD extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('/agd')
            .then(res => res.json())
            .then(doc => { this.setState({items: doc})})
            .catch(e => console.log(e))
        
    }

    render() {
        console.log(this.state.items)
        return (
            <div>
                <h2>AGD Component</h2>
                <div>
                    {this.state.items.map((item, index) => (
                        <Item 
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            amount={item.amount}
                        />
                    ))}
                </div>                
            </div>
        )
    }
}

export default AGD;