function seeChart(cardElement) {
  // Extract the data for the chart from the card or any other source
  const newData = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ], // Update with new labels
    datasets: [{
      label: 'My Updated Dataset',
      data: [80, 59, 90, 81, 90, 55, 40], // Update with new data
      fill: true,
      backgroundColor: 'rgba(0, 128, 0, 0.2)', // Change colors as needed
      borderColor: 'rgb(0, 128, 0)',
      pointBackgroundColor: 'rgb(0, 128, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(0, 128, 0)'
    }]
  };

  // Update the chart's data
  radarChart.data = newData;

  // Update the chart
  radarChart.update();
}

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

const ctx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctx, config);

