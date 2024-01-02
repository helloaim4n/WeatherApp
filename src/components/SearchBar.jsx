import { useState } from 'react';

function SearchBar() {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        // Implement API call logic here
        console.log(city);
    }

    return (
        <div>
            <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;