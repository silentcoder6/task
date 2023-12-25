const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const labels = ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukiteo", "Edmonds"];
const labels2 = ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukiteo", "Edmonds"];

const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'Revenue for November 2019',
        data: [34000, 41000, 47000, 49000, 90000, 95000],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data,
    options: {
        indexAxis: 'y',
    }
};


new Chart(ctx, config);

const data2 = {
    labels: labels2,
    datasets: [{
        axis: 'y',
        label: 'Revenue for November 2019',
        data: [34000, 41000, 47000, 49000, 90000, 95000],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const config2 = {
    type: 'bar',
    data,
    options: {
        indexAxis: 'y',
    }
};





new Chart(ctx2, config2);