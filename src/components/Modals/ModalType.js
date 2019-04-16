import React from 'react';
import Styled from 'styled-components';

const StyledModalContainer = Styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .modal-contant {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        z-index: 10000;
        cursor: pointer;
    }
    .modal-dialog {
        overflow-y: auto;
        position: relative;
        width: 50%;
        height: 95%;
        margin: 4rem auto;
        cursor: default;
        border-radius: 4px;
    }
`;

class Modal extends React.Component {
	listenKeyboard(event) {
		if (event.key === 'Escape' || event.keyCode === 27) {
			this.props.onClose();
		}
	}

	componentDidMount() {
		if (this.props.onClose) {
			window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
		}
	}

	componentWillUnmount() {
		if (this.props.onClose) {
			window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
		}
	}

	onOverlayClick() {
		this.props.onClose();
	}

	onDialogClick(event) {
		event.stopPropagation();
	}

	render() {
		return (
			<StyledModalContainer>
				<div className="modal-overlay">
					<div className="modal-content" onClick={this.onOverlayClick.bind(this)}>
						<div className="modal-dialog" onClick={this.onDialogClick}>
							{this.props.children}
						</div>
					</div>
				</div>
			</StyledModalContainer>
		);
	}
}
const ModalType = ({ onClose, modal }) => {
	return <Modal onClose={onClose}>{modal}</Modal>;
};

export default ModalType;
