// Dom manip
var arr = [
    {   
        task: "Meeting",
        desp: "Offical",
        time: "19:20",

    },
    {
        task: "Break",
        desp: "-",
        time: "11:50"
    },
    {
        task: "Meeting",
        desp: "client",
        time: "12:00"
    },
    {
        task: "Break",
        desp: "-",
        time: "1:50"
    },
    {
        task: "Project",
        desp: "bug-fix",
        time: "11:50"
    },
    {
        task: "Meeting",
        desp: "Offical",
        time: "10:20"
    },
    {
        task: "Break",
        desp: "-",
        time: "15:50"
    },
    {
        task: "Project",
        desp: "demo",
        time: "17:50"
    },
    {
        task: "Break",
        desp: "-",
        time: "11:50"
    },
    {
        task: "Meeting",
        desp: "cleint",
        time: "12:50"
    }
];


function insert() {
    var taskk = document.getElementById('task_ip').value;
    var despp = document.getElementById('dip').value;
    var timee = document.getElementById('timeip').value;
    var x =
    {
        task: taskk,
        desp: despp,
        time: timee
    }
    arr.push(x);
    render();
}

// Filter
document.getElementById('tsk').addEventListener("change", function () {
    var reg=1;
    const cur = this.value;
    const fill = arr.filter(j => cur == 'All' || cur == j.task).map((j) => `
     <tr> 
        <td>${reg++}</td>
         <td>${j.task}</td>
         <td>${j.desp}</td>
         <td>${j.time}</td>
         <td><button class="button-38" id='up'>Update</button><td>
         <td><button class="button-38" id='del' onclick="Delete('${reg-2}')">delete</button><td>
     </tr>`
    );
    q.innerHTML = fill.join('');
})

// Qurreyselector
const q = document.querySelector(" tbody");
render()


function render() {
    var reg=1;
    const q = document.querySelector("tbody");
    const row = arr.map((i) => `
<tr> 
<td>${reg++}</td>
<td>${i.task}</td>
<td>${i.desp}</td>
<td>${i.time}</td>
<td><button class="button-38" id='up'>Update</button><td>
<td><button class="button-38" id='del' onclick="Delete('${reg-2}')">delete</button><td>
</tr>`
    );
    q.innerHTML = row.join('');

};


function Delete(dr) {
    arr.splice(dr,1)
    render()

}







//Stopwatch---------------------------

let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startbtn.addEventListener('click', function () {
    timer = true;
    stopwatch();
});

stopbtn.addEventListener('click', function () {
    timer = false;
    stopwatch();

});

resetbtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00"
    document.getElementById('min').innerHTML = "00"
    document.getElementById('sec').innerHTML = "00"

});

function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (min == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hr_st = hour;
        let min_st = minute;
        let sec_st = second;
        let ct_st = count;

        if (hour < 10) {
            hr_st = "0" + hr_st;
        }

        if (minute < 10) {
            min_st = "0" + min_st;
        }

        if (second < 10) {
            sec_st = "0" + sec_st;
        }

        if (count < 10) {
            ct_st = "0" + ct_st;
        }
        document.getElementById('hr').innerHTML = hr_st;
        document.getElementById('min').innerHTML = min_st;
        document.getElementById('sec').innerHTML = sec_st;
        setTimeout(stopwatch, 10);
    }
}

//Stopwatch end------------------------------------------