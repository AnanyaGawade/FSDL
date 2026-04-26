import Chart from './chart.esm.js';
// WAIT FOR DOM TO LOAD
window.addEventListener("DOMContentLoaded", () => {

    // STATIC DATA
    const students = ["A", "B", "C", "D", "E"];
    const marks = [78, 85, 90, 65, 88];
    const progress = [60, 70, 75, 80, 90];

    // BAR CHART
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: students,
            datasets: [{
                label: "Marks",
                data: marks
            }]
        }
    });

    // LINE CHART
    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
            datasets: [{
                label: "Progress %",
                data: progress
            }]
        }
    });

    // PIE CHART
    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Present", "Absent", "Leave"],
            datasets: [{
                data: [75, 15, 10]
            }]
        }
    });

});