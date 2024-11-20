import { useState } from "react";

const SearchBar = ({ search = "", setSearch = () => {} }) => {
	const [inputValue, setInputValue] = useState(search);

	const handleChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		// Debounce logic: Update the actual search state after a delay
		setTimeout(() => {
			setSearch(value);
		}, 300);
	};

	return (
		<>
			<form
				action=''
				class='p-1 my-4 w-full transition duration-500 ease-in-out transform border-2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex'
			>
				<div class='flex-1 min-w-0 revue-form-group'>
					<input
						id='text'
						type='text'
						class='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-300'
						placeholder='Search Products..'
						value={inputValue}
						onChange={handleChange}
					/>
				</div>
			</form>
		</>
	);
};

export default SearchBar;
