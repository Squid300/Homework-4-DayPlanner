const inputEl = $(".input");
const btnEl = $(".saveBtn");
const time = moment().format("HH");
//setting array to store plans to write and read from storage
let plans = [
    {
        hour: 09,
        plan: ""
    },{
        hour: 10,
        plan: ""
    },{
        hour: 11,
        plan: ""
    },{
        hour: 12,
        plan: ""
    },{
        hour: 13,
        plan: ""
    },{
        hour: 14,
        plan: ""
    },{
        hour: 15,
        plan: ""
    },{
        hour: 16,
        plan: ""
    },{
        hour: 17,
        plan: ""
    },
];

console.log(time);
console.log(inputEl)

//parsing plans from local storage
plans = JSON.parse(localStorage["planner"]);

//coloring planner based on real time
for(i=0; i<inputEl.length; i++){
    const current = inputEl[i];
    if(current.dataset.time < time){
        inputEl[i].classList.add("past");
    }else if(current.dataset.time === time){
        inputEl[i].classList.add("present");
    }else if(current.dataset.time > time){
        inputEl[i].classList.add("future");
    }
}

//updating planner with plans from local storage
function previousPlans(){
    for(i=0; i<inputEl.length; i++){
        for(o=0; o<plans.length; o++){
            if(plans[o].hour == inputEl[i].dataset.time){
                inputEl[i].value = plans[o].plan;
            }
        }
    }
}

//on save buton click, adding plan to array and storing it locally
btnEl.on("click", function(event){
    console.log(this.previousElementSibling.value);
    const selectTime = this.previousElementSibling.dataset.time;

    for(i=0; plans.length; i++){
        if(plans[i].hour == selectTime){
            plans[i].plan = this.previousElementSibling.value;
        }
    }
    localStorage.setItem("planner", JSON.stringify(plans));
})

previousPlans();