// Disable other vote buttons after one is clicked
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    voteButtons.forEach(b => b.disabled = true);
    btn.textContent = 'Voted';
    btn.style.backgroundColor = '#28a745';
    // Submit vote logic here (e.g., POST to backend)
  });
});

// Chart.js example for results page
const ctx = document.getElementById('resultsChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Eva Thomas', 'David Nkosi', 'Frank Moyo'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 7], // Replace with dynamic values
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
