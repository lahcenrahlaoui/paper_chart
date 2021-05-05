// call function for the first time

appVesitors();

// function for chart
async function appVesitors() {
  const data = await getDataVesitors();
  const ctx = document.getElementById("app-vesitors-chart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.xs,
      datasets: [
        {
          data: data.ys,
          tension: 0.4,
          fill: true,
          color: "red",
          backgroundColor: "#00cccc44",
          borderColor: "#00cccc",
          borderWidth: 3.5,
        },
      ],
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        fontColor: "#fff",
        fontSize:20,
        text: "App vesitors",
      },
      scales: {
        yAxes: [{
          ticks:{
            fontColor: "#fff",
          },
          gridLines: {
            zeroLineColor: '#ffffff',
            color: "#ddd"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "#fff",
          },
          gridLines: {
            zeroLineColor: '#ffffff',
            color: "#ddd"
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// function for get data

async function getDataVesitors() {
  const xs = [];
  const ys = [];

  const response = await fetch("csv_files/first_visitors.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const month = columns[0];
    xs.push(month);
    const temp = columns[1];
    ys.push(temp);
    console.log(month);
  });
  return { xs, ys };
}

















