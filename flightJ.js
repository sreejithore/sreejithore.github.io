document.getElementById('search-flights').addEventListener('click', function() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const child = document.getElementById('child').value;
    const adult = document.getElementById('adult').value;

    const results = document.getElementById('results');
    results.innerHTML = `<p>Searching flights from ${departure} to ${destination} on ${date} for ${adult} passenger(s) with ${child} minors....</p>`;

    // Simulated API call and result (for demonstration purposes)
    setTimeout(() => {
        results.innerHTML += `
            <div>
                <h2>Flight Results:</h2>
                <p>Flight A123 - Rs 7000/p</p>
                <p>Flight B456 - Rs 10,000/p</p>
                <p>Flight C789 - Rs 8,500/p</p>
            </div>
        `;
    }, 2000);
});
