import React from 'react';


export class ComplaintItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const updateSelectedComplaintItem = this.props.action;
        updateSelectedComplaintItem(this.props.data.id);
    }

    render() {
        const { subject, author } = this.props.data;

        return (
            <div onClick={this.handleClick}>
                <p>{ subject }</p>
                <p>{ author }</p>
            </div>
        );
    }
}
