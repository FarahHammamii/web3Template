document.addEventListener("DOMContentLoaded", function () {
    const web3PagesElement = document.getElementById("web3-pages");
    const latestUpdateElement = document.getElementById("latest-update");
    const highestEsgCard = document.querySelector(".middle-section .card:nth-child(1)");
    const highRankingCard = document.querySelector(".middle-section .card:nth-child(2)");
    const lowRankingCard = document.querySelector(".middle-section .card:nth-child(3)");
    const tableBody = document.getElementById("web3-table");
    
    // Mock Data
    const web3Pages = 125;
    const latestUpdate = new Date().toLocaleDateString();
    const highestESG = [
        { name: "Company A", score: 95 },
        { name: "Company B", score: 92 },
        { name: "Company C", score: 90 }
    ];
    const highRankingPercentage = 73;
    const lowRankingPercentage = 27;

    function toggleFilterMenu() {
        const menu = document.getElementById('filter-menu');
        menu.classList.toggle('show');
    }
    
    function filterBy(type) {
        alert(`Filtering by ${type}`);
        // You can replace the alert with actual filtering logic, such as updating content based on the filter.
        toggleFilterMenu();  // Close the menu after selecting a filter
    }
    
    
    // Update HTML Content
    web3PagesElement.textContent = web3Pages;
    latestUpdateElement.textContent = latestUpdate;
    
    const tableData = [
        { name: "Blockchain A", rank: 1, website: "#", details: "#" },
        { name: "Blockchain B", rank: 2, website: "#", details: "#" },
        { name: "Blockchain C", rank: 3, website: "#", details: "#" },
        { name: "Blockchain A", rank: 1, website: "#", details: "#" },
        { name: "Blockchain B", rank: 2, website: "#", details: "#" }
    ];
    tableData.forEach(entry => {
        let row = document.createElement("tr");
        let rankText = entry.rank;
    
        // Determine the color and rank change text
        let rankColor = 'green';  // Default to green
        let rankDirection = `▲ 2`;  // Example positive rank change
    
        row.innerHTML = `
            <td>${entry.name}</td>
            <td><span style="color: ${rankColor};">${rankText} (${rankDirection})</span></td>
            <td><a href="${entry.website}">Check</a></td>
            <td><a href="${entry.details}">Details</a></td>
        `;
        tableBody.appendChild(row);
    });
    
    // Replace highest ESG card content with a horizontal bar chart
    highestEsgCard.innerHTML = '<h3>Highest ESG Scores</h3><canvas id="highest-esg-chart"></canvas>';
    
    const highestEsgChartCanvas = document.getElementById("highest-esg-chart").getContext("2d");
    new Chart(highestEsgChartCanvas, {
        type: "bar",
        data: {
            labels: highestESG.map(company => company.name),
            datasets: [{
                label: "ESG Score",
                data: highestESG.map(company => company.score),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Make the chart horizontal
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Replace high ranking ESG card content with a pie chart
    highRankingCard.innerHTML = '<h3>High Ranking ESG Scores</h3><canvas id="high-ranking-chart"></canvas>';
    const highRankingChartCanvas = document.getElementById("high-ranking-chart").getContext("2d");
    new Chart(highRankingChartCanvas, {
        type: "doughnut",
        data: {
            labels: ["High Ranking", "Others"],
            datasets: [{
                data: [highRankingPercentage, 100 - highRankingPercentage],
                backgroundColor: ["#00d4ff", "#333"]
            }]
        },
        options: {
            responsive: true,
            cutout: "70%",
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Replace low ranking ESG card content with a pie chart
    lowRankingCard.innerHTML = '<h3>Low Ranking ESG Scores</h3><canvas id="low-ranking-chart"></canvas>';
    const lowRankingChartCanvas = document.getElementById("low-ranking-chart").getContext("2d");
    new Chart(lowRankingChartCanvas, {
        type: "doughnut",
        data: {
            labels: ["Low Ranking", "Others"],
            datasets: [{
                data: [lowRankingPercentage, 100 - lowRankingPercentage],
                backgroundColor: ["#ff6384", "#333"]
            }]
        },
        options: {
            responsive: true,
            cutout: "70%",
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
