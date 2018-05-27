import React, {Component} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import style from './AGD.css';

class AGD extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
        this.itemDetail = this.itemDetail.bind(this);
    }

    componentDidMount() {
        fetch('/agd')
            .then(res => res.json())
            .then(doc => { this.setState({items: doc})})
            .catch(e => console.log(e))
        
    }

    itemDetail(e) {
        
    }

    render() {
        return (
            <div className='AGD'>
                <div className="container">
                    <h2>See AGD offer</h2>
                    <div className="AGD__body">
                        {this.state.items.map((item, index) => (
                        <Link to={'agd/' + item._id} 
                            key={index}
                        >                             
                            <Item 
                                name={item.name}
                                desc={item.desc}
                                amount={item.amount}
                                id={item._id}
                                itemDetail={this.itemDetail}
                            />
                        </Link>
                        ))}
                    </div>                
                </div>
            </div>
        )
    }
}

export default AGD;