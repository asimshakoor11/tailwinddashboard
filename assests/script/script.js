



let leftside = document.getElementById("leftside")
let closediv = document.getElementById("closediv")


function opensidebar(){
    leftside.classList.remove("max-[700px]:-translate-x-full")
    leftside.classList.add("max-[700px]:translate-x-0")
    closediv.classList.remove("hidden")
}

function closesidebar(){
    leftside.classList.add("max-[700px]:translate-x-0")
    leftside.classList.add("max-[700px]:-translate-x-full")
    closediv.classList.add("hidden")
}

// dropdown toggle
let listboxP5 = document.getElementById("listboxP5");

let selectedOptionP5 = document.getElementById("selectedOptionP5");

const links5 = document.querySelectorAll('.nav-linkP5');

function dropdowntoggleP5() {
    listboxP5.classList.toggle("hidden");
    listboxT.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
}



// <!-- ************************* theme switch Start *********************** -->

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")    
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
} else {
    document.documentElement.classList.remove('dark')    
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
}

function darktheme() {
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
}

function lighttheme() {
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}



// dropdown toggle
let listboxT = document.getElementById("listboxT");


function themedropdown() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listboxT.classList.toggle("hidden");
    listboxP5.classList.add("hidden")
}


// <!-- ************************* theme switch end *********************** -->

// Date start

const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const MONTH_SHORT_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function app() {
    return {
        showDatepicker: false,
        datepickerValue: "",
        selectedDate: "2021-02-04",
        dateFormat: "DD-MM-YYYY",
        month: "",
        year: "",
        no_of_days: [],
        blankdays: [],
        initDate() {
            let today;
            if (this.selectedDate) {
                today = new Date(Date.parse(this.selectedDate));
            } else {
                today = new Date();
            }
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.datepickerValue = this.formatDateForDisplay(
                today
            );
        },
        formatDateForDisplay(date) {
            let formattedDay = DAYS[date.getDay()];
            let formattedDate = ("0" + date.getDate()).slice(
                -2
            ); // appends 0 (zero) in single digit date
            let formattedMonth = MONTH_NAMES[date.getMonth()];
            let formattedMonthShortName =
                MONTH_SHORT_NAMES[date.getMonth()];
            let formattedMonthInNumber = (
                "0" +
                (parseInt(date.getMonth()) + 1)
            ).slice(-2);
            let formattedYear = date.getFullYear();
            if (this.dateFormat === "DD-MM-YYYY") {
                return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`; // 02-04-2021
            }
            if (this.dateFormat === "YYYY-MM-DD") {
                return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`; // 2021-04-02
            }
            if (this.dateFormat === "D d M, Y") {
                return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`; // Tue 02 Mar 2021
            }
            return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
        },
        isSelectedDate(date) {
            const d = new Date(this.year, this.month, date);
            return this.datepickerValue ===
                this.formatDateForDisplay(d) ?
                true :
                false;
        },
        isToday(date) {
            const today = new Date();
            const d = new Date(this.year, this.month, date);
            return today.toDateString() === d.toDateString() ?
                true :
                false;
        },
        getDateValue(date) {
            let selectedDate = new Date(
                this.year,
                this.month,
                date
            );
            this.datepickerValue = this.formatDateForDisplay(
                selectedDate
            );
            // this.$refs.date.value = selectedDate.getFullYear() + "-" + ('0' + formattedMonthInNumber).slice(-2) + "-" + ('0' + selectedDate.getDate()).slice(-2);
            this.isSelectedDate(date);
            this.showDatepicker = false;
        },
        getNoOfDays() {
            let daysInMonth = new Date(
                this.year,
                this.month + 1,
                0
            ).getDate();
            // find where to start calendar day of week
            let dayOfWeek = new Date(
                this.year,
                this.month
            ).getDay();
            let blankdaysArray = [];
            for (var i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }
            let daysArray = [];
            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }
            this.blankdays = blankdaysArray;
            this.no_of_days = daysArray;
        },
    };
}

// date end 


// <!-- ******************************* Header start********************** -->


// dropdown toggle
let listbox = document.getElementById("listbox");

function dropdowntoggle() {
    listbox1.classList.add("hidden");
    listboxT.classList.add("hidden");
    listboxP5.classList.add("hidden");
    listbox.classList.toggle("hidden");
}



// dropdowntoggle end

// dropdown toggle
let listbox1 = document.getElementById("listbox1");

let selectedOption1 = document.getElementById("selectedOption1");

const links = document.querySelectorAll('.nav-link');

function dropdowntoggle1() {
    listbox.classList.add("hidden");
    listbox1.classList.toggle("hidden");
    listboxT.classList.add("hidden");
    listboxP5.classList.add("hidden");
    document.getElementById("myInput").value = "";
    ul = document.getElementById("listbox1");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length - 1; i++) {
        li[i].classList.remove("hidden");
    }
    event.preventDefault();
}

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                selectedOption1.innerHTML = "";
                let text = link.innerHTML;
                selectedOption1.innerHTML = text;
                link.nextElementSibling.classList.add("hidden");
                listbox1.classList.add("hidden");
            });

            e.preventDefault();
            selectedOption1.innerHTML = ""
            let text1 = link.innerHTML;
            selectedOption1.innerHTML = text1
            link.nextElementSibling.classList.remove("hidden")
        });
    });
}

// dropdowntoggle end

// <!-- ******************************* header End ********************** -->


// Search funcality 
function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listbox1");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length - 1; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove("hidden");
        } else {
            li[i].classList.add("hidden");
        }
    }
    e.preventDefault();
}

// Search funcality

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        listboxT.classList.add("hidden");       
        listboxP5.classList.add("hidden");
        listbox1.classList.add("hidden");
        listbox.classList.add("hidden");
    }
}

function alert1(){
    alert("Don't forget to visit settings page \n and theme switch functionality")
}

setTimeout(alert1, 5000)


