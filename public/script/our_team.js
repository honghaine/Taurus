const wrapper = document.querySelector('.card')





let chart
const seeChart = (id, name) => {
    console.log(name)
}





const createChart = () => {
    const ctx = document.getElementById('myChart');

    const data = {
        labels: [
          'Negotiation',
          'Coding',
          'Visualization',
          'English',
          'Communication',
          'Active'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };

    new Chart(ctx, {
     type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        responsive: false
      },
      scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
       }
    });
}


