import React, { useState } from 'react';
import './loanItem.css';

const LoanItem = ({ name, checked, setModalActive, element, modalActive }) => {
	console.log(checked);

	return (
		<>
			<div className='item'>
				<div className='item_text'>
					<span>Loan name {name}</span>
					<br />
					<span>Loan details, amounts and values</span>
				</div>
				<div className='btn_wrap'>
					<span className={checked}>Invested</span>
					<input
						className='item_btn'
						onClick={() =>
							setModalActive({
								...modalActive,
								currentLoan: element,
								isActive: true,
							})
						}
						type='button'
						value='INVEST'
					/>
				</div>
			</div>
		</>
	);
};

export default LoanItem;
