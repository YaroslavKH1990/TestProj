import React, { useState } from 'react';
import './loansList.css';
import LoanItem from '../LoanItem/LoanItem';
import Modal from '../Modal/Modal';

const LoansList = () => {
	const [loans, setLoans] = useState([
		{
			id: '1',
			title: 'Voluptate et sed tempora qui quisquam.',
			tranche: 'A',
			available: '11.959',
			annualised_return: '8.60',
			term_remaining: '864000',
			ltv: '48.80',
			amount: '85,754',
		},
		{
			id: '5',
			title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
			tranche: 'B',
			available: '31.405',
			annualised_return: '7.10',
			term_remaining: '1620000',
			ltv: '48.80',
			amount: '85,754',
		},
		{
			id: '12',
			title:
				'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
			tranche: 'C',
			available: '12.359',
			annualised_return: '4.80',
			term_remaining: '879000',
			ltv: '48.80',
			amount: '85,754',
		},
	]);

	const [checked, setChecked] = useState('invisible');

	const [modalActive, setModalActive] = useState({
		currentLoan: {},
		isActive: false,
		isChecked: {
			id: [],
		},
	});

	console.log(modalActive);

	const [sumValue, setSumValue] = useState(
		loans.reduce((prevValue, currentValue) => {
			return prevValue + parseFloat(currentValue.available);
		}, 0)
	);

	return (
		<>
			<div className='container'>
				<p className='title'>Current Loans</p>
				{loans.map((elem, index) => {
					return (
						<LoanItem
							modalActive={modalActive}
							checked={
								modalActive.isChecked.id.some((el) => el === elem.id)
									? checked
									: 'invisible'
							}
							element={elem}
							setModalActive={setModalActive}
							key={elem.id}
							name={index + 1}
						/>
					);
				})}

				<span className='total'>
					Total amount, available for investments: £
					{sumValue.toFixed(4).slice(0, -1)}
				</span>
			</div>
			<Modal
				sumValue={sumValue}
				setSumValue={setSumValue}
				loans={loans}
				setLoans={setLoans}
				checked={checked}
				setChecked={setChecked}
				element={modalActive}
				setModalActive={setModalActive}
			/>
		</>
	);
};

export default LoansList;
