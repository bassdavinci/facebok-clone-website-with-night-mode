
let messageLink = document.querySelector(".message-link")
let messangerTab = document.querySelector(".messenger-tab")
let Body = document.querySelector(".hero")

Body.addEventListener("click", () => {
    messangerTab.classList.remove("active")
    profileCol.classList.remove("active")
    notificationTab.classList.remove("active")
    leftContent.classList.remove("active")
})
window.addEventListener("scroll", () => {
    messangerTab.classList.remove("active")
    profileCol.classList.remove("active")
    notificationTab.classList.remove("active")
    leftContent.classList.remove("active")
})

// messangerTab//
messageLink.onclick = () => {
    messangerTab.classList.toggle("active")
    profileCol.classList.remove("active")
    notificationTab.classList.remove("active")
    leftContent.classList.remove("active")
}

// notificationTab//
let notice = document.querySelector(".notice")
let notificationTab = document.querySelector(".notification-tab")

notice.onclick = () => {
    notificationTab.classList.toggle("active")
    profileCol.classList.remove("active")
    messangerTab.classList.remove("active")
    leftContent.classList.remove("active")
}

// profileCol//
let profileImage = document.querySelector(".profile-image")
let profileCol = document.querySelector(".profile-col")

profileImage.onclick = () => {
    profileCol.classList.toggle("active")
    notificationTab.classList.remove("active")
    messangerTab.classList.remove("active")
    leftContent.classList.remove("active")
}


// statusUdatePage//
let statusUdateLink = document.querySelector(".status-update-link")
let statusUdatePage = document.querySelector(".status-update-page")

statusUdateLink.onclick = () => {
    statusUdatePage.classList.add("active")
}

let closeForm = document.querySelector(".status-update-form-close")

closeForm.onclick = () => {
    statusUdatePage.classList.remove("active")
}
// statusUdatePage//

let logOut = document.querySelector(".logout")
logOut.addEventListener("click", () => {
    window.location.href = "index.html"
})

// .left-content//
let leftContent = document.querySelector(".left-content")
let barsIcon = document.querySelector(".bars-icon")

barsIcon.onclick = () => {
    leftContent.classList.toggle("active")
    notificationTab.classList.remove("active")
    profileCol.classList.remove("active")
    messangerTab.classList.remove("active")
}



// night-mode//
let lightMode = document.querySelector(".night-toggler")
lightMode.onclick = () => {
    lightMode.classList.toggle("active")
    document.body.classList.toggle("dark-theme")
}







// stories-slide//
let stories = document.querySelectorAll(".stories")
let prev = document.querySelectorAll(".control-nav-left")
let next = document.querySelectorAll(".control-nav-right")

stories.forEach((item, i) => {
    let storiesContainer = item.getBoundingClientRect();
    let storiesContainerWidth = storiesContainer.width;

    next[i].addEventListener("click", () => {
        item.scrollLeft += storiesContainerWidth;
    })
    prev[i].addEventListener("click", () => {
        item.scrollLeft -= storiesContainerWidth;
    })
})
