

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

let listboxoptionlight = document.getElementById("listbox-option-light")

listboxoptionlight.addEventListener("click", function(){
    console.log("clicked")
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'

})

let listboxoptiondark = document.getElementById("listbox-option-dark")

listboxoptiondark.addEventListener("click", function(){
    console.log("clicked")
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
})

// function darktheme() {  
//     console.log("clicked")
//     document.getElementById("sunsvg").classList.add("hidden")
//     document.getElementById("moonsvg").classList.remove("hidden")
//     document.documentElement.classList.add('dark')
//     localStorage.theme = 'dark'
// }

// function lighttheme() {
//     console.log("clicked")
//     document.getElementById("sunsvg").classList.remove("hidden")
//     document.getElementById("moonsvg").classList.add("hidden")
//     document.documentElement.classList.remove('dark')
//     localStorage.theme = 'light'

// }



// dropdown toggle
let listboxT = document.getElementById("listboxT");

// const linksT = document.querySelectorAll('.nav-linkT');

function themedropdown() {
    listboxT.classList.toggle("hidden");    
    listbox1.classList.add("hidden");
    listboxP5.classList.add("hidden");
}

// <!-- ************************* theme switch end *********************** -->


// aside bar navigation 

const links = document.querySelectorAll('.nav-link');

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove("bg-[#f4f4f5]", "hover:bg-[#f4f4f5]", "dark:bg-muted-foreground" );
                link.classList.add("hover:bg-transparent", "hover:underline");
            });
            e.preventDefault();
            link.classList.add("bg-[#f4f4f5]", "hover:bg-[#f4f4f5]", "dark:bg-muted-foreground");
            link.classList.remove("hover:bg-transparent", "hover:underline");
        });
    });
}

let profilesec = this.document.getElementById("profile");
let accountsec = this.document.getElementById("account");
let appearancesec = this.document.getElementById("appearance");
let notificationsec = this.document.getElementById("notification");
let displaysec = this.document.getElementById("display");


function showprofile() {
    profilesec.classList.remove("hidden");
    appearancesec.classList.add("hidden");
    accountsec.classList.add("hidden");
    notificationsec.classList.add("hidden");
    displaysec.classList.add("hidden");
}

function showaccount() {
    accountsec.classList.remove("hidden");
    profilesec.classList.add("hidden");
    appearancesec.classList.add("hidden");
    notificationsec.classList.add("hidden");
    displaysec.classList.add("hidden");
}

function showappearance() {
    appearancesec.classList.remove("hidden");
    accountsec.classList.add("hidden");
    profilesec.classList.add("hidden");
    notificationsec.classList.add("hidden");
    displaysec.classList.add("hidden");
}

function shownotification() {
    notificationsec.classList.remove("hidden");
    appearancesec.classList.add("hidden");
    accountsec.classList.add("hidden");
    profilesec.classList.add("hidden");
    displaysec.classList.add("hidden");
}
function showdisplay() {
    displaysec.classList.remove("hidden");
    appearancesec.classList.add("hidden");
    accountsec.classList.add("hidden");
    profilesec.classList.add("hidden");
    notificationsec.classList.add("hidden");
}

// aside bar navigation 

// add new url input 

function addtextbox() {
    document.getElementById("inputsdiv")
        .innerHTML +=
        `<div class="space-y-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
            for=":r77:-form-item">URLs</label>
        <p id=":r77:-form-item-description"
            class="text-[0.8rem] text-muted-foreground sr-only">Add links to your website,
            blog, or social media profiles.</p><input
            class="flex h-9 w-full rounded-md border dark:text-muted-foreground border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id=":r77:-form-item" aria-describedby=":r77:-form-item-description"
            aria-invalid="false" value="" name="urls.1.value">
    </div>`;
}
// add new url input 


// theme switch 


let lightth = document.getElementById("lightth")
let darkth = document.getElementById("darkth")

function lighttheme() {
    darkth.classList.remove("border-slate-950");
    darkth.classList.add("border-muted");
    lightth.classList.remove("border-muted");
    lightth.classList.add("border-slate-950");
}

function darktheme() {
    lightth.classList.remove("border-slate-950");
    lightth.classList.add("border-muted");
    darkth.classList.remove("border-muted");
    darkth.classList.add("border-slate-950");
}

// theme switch 

// radio button  

let rad1 = document.getElementById("rad1");
let rad2 = document.getElementById("rad2");
let rad3 = document.getElementById("rad3");


function radio1() {
    rad1.classList.remove("hidden")
    rad2.classList.add("hidden")
    rad3.classList.add("hidden")
}

function radio2() {
    rad1.classList.add("hidden")
    rad2.classList.remove("hidden")
    rad3.classList.add("hidden")
}
function radio3() {
    rad1.classList.add("hidden")
    rad2.classList.add("hidden")
    rad3.classList.remove("hidden")
}

// radio button  

//   email selection 
let listbox1 = document.getElementById("listbox1");

let selectedOption1 = document.getElementById("selectedOption1");

const links1 = document.querySelectorAll('.nav-link1');


function dropdowntoggle1() {
    // listbox.classList.add("hidden");
    listbox1.classList.toggle("hidden");
}

if (links1.length) {
    links1.forEach((link1) => {
        link1.addEventListener('click', (e) => {
            links1.forEach((link1) => {
                selectedOption1.innerHTML = "";
                let text1 = link1.innerHTML;
                selectedOption1.innerHTML = text1;
                link1.nextElementSibling.classList.add("hidden");
                listbox1.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption1.innerHTML = ""
            let text2 = link1.innerHTML;
            selectedOption1.innerHTML = text2
            link1.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end

//   email selection 


// language selection 

let listbox2 = document.getElementById("listbox2");

let selectedOption2 = document.getElementById("selectedOption2");

const links2 = document.querySelectorAll('.nav-link2');

function dropdowntoggle2() {
    listbox1.classList.add("hidden");
    listbox2.classList.toggle("hidden");
    document.getElementById("myInput").value = "";
    ul = document.getElementById("listbox2");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
            li[i].classList.remove("hidden");
    }
}

if (links2.length) {
    links2.forEach((link2) => {
        link2.addEventListener('click', (e) => {
            links2.forEach((link2) => {
                selectedOption2.innerHTML = "";
                let text1 = link2.innerHTML;
                selectedOption2.innerHTML = text1;
                link2.nextElementSibling.classList.add("hidden");
                listbox2.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption1.innerHTML = ""
            let text2 = link2.innerHTML;
            selectedOption2.innerHTML = text2
            link2.nextElementSibling.classList.remove("hidden")
        });
    });
}


// Search funcality 
function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listbox2");
    li = ul.getElementsByTagName("li");
    console.log(li.length)
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
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
        listbox1.classList.add("hidden");
        listbox2.classList.add("hidden");
        listboxT.classList.add("hidden");
        listboxP5.classList.add("hidden");
    }
}




