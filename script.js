const toggleBtn = document.querySelector("i.fa-sun");
const list = document.querySelectorAll(".list");
const time = new Date();
const isDefaultDarkMode = time.getHours() >= 20;

function setDarkMode() {
    if (isDefaultDarkMode) {
        document.body.classList.add("dark-mode");
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
    }

    toggleBtn.onclick = () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.classList.toggle("fa-sun");
        toggleBtn.classList.toggle("fa-moon");
    };
}

setDarkMode();

function activeLink(){
    list.forEach((item)=>
        item.classList.remove("active")
    )
    this.classList.add('active');
}
list.forEach((item)=>
    item.addEventListener('click', activeLink)
)