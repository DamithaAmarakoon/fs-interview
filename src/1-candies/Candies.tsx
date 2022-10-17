import React, { useState } from 'react';
import './Candies.css';

/**
 * Scenario:
 *  - There is a candy store that sells candies at N rupees each
 *  - These days, there is a promotional program, where if you buy a candy,
 *    you get 1 store-credit for free
 *  - 1 store-credit is equivalent to 1 rupee
 *  - You are at the store to buy as much candies as possible, but you only have
 *    C rupees in your wallet
 *  - So, utilize the ongoing promotion to buy as much candies as possible
 *  - Find the number of candies X, that you can buy.
 */
export function Candies() {
	const [price, setPrice] = useState(0);
	const [cash, setCash] = useState(0);
	const [numOfCandies, setNumOfCandies] = useState(0);

	// TODO: Implement
	let getNumberOfCandies = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let candyPrice: number = price;
		let availableRupees: number = cash;

		let numOfCandies = 0;
		let remaining = availableRupees;

		while (remaining >= candyPrice) {
			let bought = Math.floor(remaining / candyPrice);
			remaining = (remaining % candyPrice) + bought;
			numOfCandies += bought;
		}

		setNumOfCandies(numOfCandies);
	};

	return (
		<form className='container' onSubmit={getNumberOfCandies}>
			<label htmlFor='price'>Price of a Candy: </label>
			<input
				name='price'
				type='number'
				onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
			/>
			<br /> <br />
			<label htmlFor='cash'>Cash available in wallet: </label>
			<input
				name='cash'
				type='number'
				onChange={(e) => setCash(parseInt(e.currentTarget.value))}
			/>
			<button type='submit'>Submit</button>
			<br /> <br />
			<p>
				Number of candies you can buy: <b>{numOfCandies}</b>
			</p>
		</form>
	);
}
