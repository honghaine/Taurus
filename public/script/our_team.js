document.addEventListener("DOMContentLoaded", function () {
  const initialData = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 90, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  const config = {
    type: 'radar',
    data: initialData,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  };

  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    const canvas = card.querySelector('canvas');
    const radarChart = new Chart(canvas, config);

    card.addEventListener('mouseover', function () {
      const newData = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: `Dataset ${index + 1}`, // Unique label for each dataset
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          fill: true,
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`,
          borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
          pointBackgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        }]
      };

      radarChart.data = newData;
      radarChart.update();
    });
  });
});
