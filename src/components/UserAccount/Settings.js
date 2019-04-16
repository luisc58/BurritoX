import React from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
	h1 { font-size: 1.8rem;}
	h2 { font-size: 1.5rem;}
	border-bottom: 1px solid rgba(215,215,215,0.6);
	padding-bottom: 1.2rem;
`;

const StyledTable = Styled.table`
	text-align: left;
	width: 50%;
	td { padding-top: 10px; font-size: 15px;}
	th {font-size: 1.2rem;padding-top: 7px;}
	.StyledTable-last {
		padding-top: 1rem;
	}
	button { 
		color: ${(props) => props.theme.green};
		padding: 10px 0;
		font-size: 1rem;
		text-align: center;
	}
`;

const StyledInfoContainer = Styled.div`
	text-align: left;
`;
const StyledInfo = Styled.div`
	padding: 5px 0;
	h2 { font-size: 1.5rem;}
	button { 
		color: ${(props) => props.theme.green};
		font-size: 1rem;
	}
	p { font-size: 1rem;}
`;

const Settings = ({ users, showModal }) => {
	return (
		<React.Fragment>
			<StyledContainer>
				<h1>ACCOUNT SETTINGS</h1>
				<StyledTable>
					<h2>
						PROFILE <button onClick={() => showModal('PROFILE')}>Edit</button>
					</h2>
					<tbody>
						<tr>
							<th>NAME</th>
							<th>EMAIL ADDRESS</th>
						</tr>
						<tr>
							<td>Luis Castillo</td>
							<td>EMAIL ADDRESS</td>
						</tr>
						<tr>
							<th className="StyledTable-last">RESET PASSWORD</th>
						</tr>
						<button>Click here to reset password</button>
					</tbody>
				</StyledTable>
			</StyledContainer>
			<StyledInfoContainer>
				<StyledInfo>
					<h2>
						BUYING INFO <button onClick={() => showModal('BUYING_INFO')}>Edit</button>
					</h2>
					<p>You do not have any payment Info on file</p>
				</StyledInfo>
				<StyledInfo>
					<h2>
						SHIPPING INFO <button onClick={() => showModal('SHIPPING_INFO')}>Edit</button>
					</h2>
					<p>You do not have any shipping Info on file</p>
				</StyledInfo>
			</StyledInfoContainer>
		</React.Fragment>
	);
};

export default Settings;
