import React, { Component } from 'react';

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
            <div>detail {console.log(this.state.item)}</div>
        )
    }
}



export default Detail;