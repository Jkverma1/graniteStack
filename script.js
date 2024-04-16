window.onload = function () {
  var chart = new CanvasJS.Chart("mainBarChartContainer", {
    animationEnabled: true,
    interactivityEnabled: false,
    axisX: {
      labelMaxWidth: 95,
      // labelWrap: false,
      labelAngle: 45,
      labelAngle: 0,
      labelTextAlign: "left",
    },
    axisY: {
      includeZero: true,
      prefix: "$",
      labelTextAlign: "left",
      gridDashType: "shortDash",
      gridColor: "rgba(193, 193, 193, 1)",
      labelTextAlign: "center",
      interval: 25000,
    },
    dataPointMaxWidth: 26,
    data: [
      {
        type: "bar",
        color: "rgba(195, 209, 249, 1)",
        dataPoints: [
          {
            y: 110000,
            label: "Total Cost (Cost of Development + Maintenance)",
          },
          {
            y: 10000,
            label: "Maintenance, Updates, Security Audits",
          },
          {
            y: 100000,
            label: "Cost of Development",
          },
        ],
      },

      {
        type: "bar",
        color: "rgba(52, 69, 238, 1)",
        dataPoints: [
          {
            y: 14000,
            label: "Total Cost (Cost of Development + Maintenance)",
          },
          {
            y: 5000,
            label: "Maintenance, Updates, Security Audits",
          },
          {
            y: 8000,
            label: "Cost of Development",
          },
        ],
      },
    ],
  });
  chart.render();

  function toolTipFormatter(e) {
    var str = "";
    var total = 0;
    var str3;
    var str2;
    for (var i = 0; i < e.entries.length; i++) {
      var str1 =
        '<span style= "color:' +
        e.entries[i].dataSeries.color +
        '">' +
        e.entries[i].dataSeries.name +
        "</span>: <strong>" +
        e.entries[i].dataPoint.y +
        "</strong> <br/>";
      total = e.entries[i].dataPoint.y + total;
      str = str.concat(str1);
    }
    str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
    str3 =
      '<span style = "color:Tomato">Total: </span><strong>' +
      total +
      "</strong><br/>";
    return str2.concat(str).concat(str3);
  }

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  CanvasJS.addColorSet("greenShades", [
    //colorSet Array
    "#3445EE",
    "#C7D5FD",
  ]);
  var chart = new CanvasJS.Chart("pieChartContainer", {
    animationEnabled: true,
    colorSet: "greenShades",
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 70 }, { y: 30, exploded: true }],
      },
    ],
  });
  chart.render();
  CanvasJS.addColorSet("blueShades", [
    //colorSet Array
    "#858FF5",
    "#101547",
    "#2A37BE",
    "#1A2377",
    "#3445EE",
    "#AEB5F8",
  ]);
  var chart = new CanvasJS.Chart("secondBarChartContainer", {
    animationEnabled: true,
    interactivityEnabled: false,
    labelAutoFit: true,
    colorSet: "blueShades",
    title: {
      text: "Cost Involved with Traditional Methods",
      fontSize: 10,
      fontFamily: "Quicksand",
      fontWeight: "700",
      horizontalAlign: "left",
      margin: 9,
      //fontColor: "red",
    },

    data: [
      {
        type: "doughnut",
        dataPoints: [
          {
            y: 13.3,
            label: "Elastic Search & Caching(13.3%)",
            exploded: true,
          },
          {
            y: 13.3,
            label: "Security Audits(13.3%)",
            exploded: true,
          },
          {
            y: 13.3,
            label: "Global Distribution(13.3%)",
            exploded: true,
          },
          {
            y: 26.7,
            label: "Multi-Environment Version Control(26.7%)",
            exploded: true,
          },
          {
            y: 26.7,
            label: "Database Optimization(26.7%)",
            exploded: true,
          },
          {
            y: 6.7,
            label: "Automated Infrastructure Scaling(6.7%)",
            exploded: true,
          },
        ],
      },
    ],
  });
  chart.render();

  function toolTipFormatter(e) {
    var str = "";
    var total = 0;
    var str3;
    var str2;
    for (var i = 0; i < e.entries.length; i++) {
      var str1 =
        '<span style= "color:' +
        e.entries[i].dataSeries.color +
        '">' +
        e.entries[i].dataSeries.name +
        "</span>: <strong>" +
        e.entries[i].dataPoint.y +
        "</strong> <br/>";
      total = e.entries[i].dataPoint.y + total;
      str = str.concat(str1);
    }
    str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
    str3 =
      '<span style = "color:Tomato">Total: </span><strong>' +
      total +
      "</strong><br/>";
    return str2.concat(str).concat(str3);
  }

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};

$(document).ready(function () {
  $(".partners-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

function onSubmit(form) {
  let name = document.querySelector(".form-name").value;
  let emailId = document.querySelector(".form-email").value;
  let companyName = document.querySelector(".form-companyName").value;
  document.getElementById("submit-overlay").style.display = "block";

  const url = "https://api-test.granitestack.com/accounts/v1/contact-info/";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: emailId,
      company: companyName,
      website: "https://granitestack.com",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => form.reset());

  return false;
}

function removePopup() {
  document.getElementById("submit-overlay").style.display = "none";
}
