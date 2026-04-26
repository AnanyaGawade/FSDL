const container = document.getElementById("skillsContainer");

let skills = [];
let chart;

// ADD SKILL
function addSkill(){
    const name = document.getElementById("skillName").value.trim();
    const percent = parseInt(document.getElementById("skillPercent").value);

    if(name === "" || isNaN(percent) || percent < 0 || percent > 100){
        alert("Enter valid input");
        return;
    }

    skills.push({ name, percent });

    renderSkills();
    renderChart();

    document.getElementById("skillName").value = "";
    document.getElementById("skillPercent").value = "";
}

// RENDER SKILLS (NO SORT)
function renderSkills(){
    container.innerHTML = "";

    skills.forEach(skill => {

        const div = document.createElement("div");
        div.className = "skill-card";

        div.innerHTML = `
            <h4>${skill.name}</h4>
            <div class="bar">
                <div class="fill" style="width:${skill.percent}%">
                    ${skill.percent}%
                </div>
            </div>
        `;

        container.appendChild(div);
    });
}

// RENDER CHART
function renderChart(){
    const labels = skills.map(s => s.name);
    const data = skills.map(s => s.percent);

    if(chart) chart.destroy();

    const ctx = document.getElementById("chart").getContext("2d");

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Skill Level",
                data: data,
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
}