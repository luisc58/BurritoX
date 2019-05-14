import React from 'react';

const black         =   'rgba(0,0,0,1)',
      white         =   'rgba(255,255,255,1)',
      unselected    =   'rgba(139,139,139,0)',
      selected      =   'rgba(113,113,113,0.4)'; 

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: black,
            backgroundColor: unselected,
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({ color: white, backgroundColor: selected });
    }

    handleMouseOut() {
        this.setState({ color: black, backgroundColor: unselected });
    }

    handleClick() {

    }
   
    render() {
        const { color, backgroundColor } = this.state;

        return (
            <div style={{ color: color, backgroundColor: backgroundColor }}
                 onMouseOver={this.handleMouseOver}
                 onMouseOut={this.handleMouseOut}>
                { this.props.name }
            </div>
        );
    }
}
