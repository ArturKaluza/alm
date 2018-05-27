import React, {Component} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import style from './AGD.css';

class AGD extends Component {
    constructor() {
        super();
        this.state = {
            items: [{
                name: 'initial item',
                desc: 'initial item desc',
                amount: 0,
                id: 1
            }],
            searchItem: [],
            searchValue: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('/agd')
            .then(res => res.json())
            .then(doc => { this.setState({items: doc})})
            .catch(e => console.log(e))
    }

    onSearch(e) {
        const value = e.target.value;
        this.setState({searchValue: value});
        const array = this.state.items;
        const filterArr = array.filter(item => item.name.indexOf(value) !== -1);
        this.setState({searchItem: filterArr});
    }

    searchItemRender() {
        return this.state.searchItem.map((item, index) => (
            <Link className="link" to={'agd/' + item._id} 
                key={index}
            >                             
                <Item 
                    name={item.name}
                    desc={item.desc}
                    amount={item.amount}
                    id={item._id}
                />
            </Link>
            ))
        }

    itemRender() {
        return this.state.items.map((item, index) => (
                <Link className="link" to={'agd/' + item._id} 
                    key={index}
                >                             
                    <Item 
                        name={item.name}
                        desc={item.desc}
                        amount={item.amount}
                        id={item._id}
                    />
                </Link>
            ))
    }

    checkRender() {
        if (this.state.searchValue.trim() && this.state.searchItem.length === 0) {
            return undefined;
        } else if (this.state.searchItem.length == 0) {
            return this.itemRender();
        } else {
            return this.searchItemRender();
        }
    }

    render() {
        return (
            <div className='AGD'>
                <div className="container">
                    <h2>See AGD offer</h2>
                    <div className="AGD__body">
                        {(this.state.searchValue.trim() && this.state.searchItem.length === 0) && <div className="notFound"><p>Item not found!</p></div>}
                        {this.checkRender()}
                    </div>                
                </div>
                <div>
                    <input type="text" className="AGD__searchInput" onKeyUp={this.onSearch} placeholder="Search item" />
                </div>
            </div>
        )
    }
}

export default AGD;