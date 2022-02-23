import React, { useState } from 'react';
import './modal.css';

const Modal = ({
	setModalActive,
	element,
	setChecked,
	setSumValue,
	sumValue,
}) => {
	const [input, setInput] = useState('');

	const inputValue = (event) => {
		event.preventDefault();
		const input = event.currentTarget;
		setInput(input.value);
	};

	const checkInputValue = () => {
		sumValue < Number(input)
			? alert('insufficient funds')
			: setSumValue(sumValue - Number(input));
	};

	return (
		<div
			className={element.isActive ? 'modal_active' : 'modal'}
			onClick={(e) => setModalActive({ ...element, isActive: false })}>
			<div className='modal_content' onClick={(e) => e.stopPropagation()}>
				<p>Invest in Loan</p>
				<p>Loan title you've clicked</p>
				<p>Amount available: £{element.currentLoan.available}</p>
				<p>Loan ends in: 1 month 10 days</p>
				<p>Investment amount (£)</p>
				<div className='input_wrap'>
					<input
						className='input_invest'
						onInput={inputValue}
						type='number'
						name='name'
						value={input}
					/>
					<input
						className='item_btn'
						onClick={() =>
							setModalActive(
								{
									currentLoan: {},
									isActive: false,
									isChecked: {
										...element.isChecked,
										id: [...element.isChecked.id, element.currentLoan.id],
									},
								},
								setChecked('visible'),
								checkInputValue(),
								setInput('')
							)
						}
						type='button'
						value='INVEST'
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
