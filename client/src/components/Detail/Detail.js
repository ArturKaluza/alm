import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Detail.css';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    componentDidMount() {
        fetch('/agd/' + this.props.match.params.id)
            .then((res) => res.json())
            .then(item => this.setState({ item }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="product">
                <div className="container">
                    <div>
                        <h2 className="product__title">Product name: {this.state.item.name}</h2>
                        <p className="product__info">Product info: {this.state.item.desc}</p>
                        <p className="product__amount">Availability: {this.state.item.amount}</p>
                    </div>
                    <Link to="/agd" className="link">
                        <button className="product__btn">Back</button>
                    </Link>
                </div>
            </div>
        )
    }
}



export default Detail;