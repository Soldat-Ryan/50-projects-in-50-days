projects = {
    "01 - Initial Cards":"01-Initial_Cards",
    "02 - Progress Bar":"02-Progress_Bar",
    "03 - Article Slide":"03-Article_Slide",
    "04 - Hidden Search":"04-Hidden_Search",
    "05 - Blur Image":"05-Blur_Image",
    "06 - Scroll Animation":"06-Scroll_Animation",
    "07 - Split Landing Page":"07-Split_Landing_Page",
    "08 - Form Wave Animation":"08-Form_Wave_Animation",
    "09 - Sound Board":"09-Sound_Board",
    "10 - Dad Jokes":"10-Dad_Jokes",
    "11 - Event KeyCodes":"11-Event_KeyCodes",
    "12 - F.A.Q":"12-FAQ",
    "13 - Random Choice Picker": "13-Random_Choice_Picker",
    "14 - Animated Navigation": "14-Animated_Navigation",
    "15 - Increment Counter": "15-Increment_Counter",
    "16 - Drink Water": "16-Drink_Water",
    "17 - Movie App": "17-Movie_App",
    "18 - Background Slider": "18-Background_Slider",
    "19 - Theme Clock": "19-Theme_Clock",
}

// Create menus
const parent = document.querySelector('.menu nav ul');

for (let id in projects) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.classList.add('menu__link');
    a.innerText = `${id}`;
    li.appendChild(a);
    parent.appendChild(li);
}

// Create iframes
const links = document.querySelectorAll('.menu__link');
const main_iframe = document.querySelector('.main__iframe');
const main_title = document.querySelector('.main__title');

links.forEach((link) => {
    link.addEventListener('click', () => {
        main_iframe.src = `${projects[link.innerHTML]}/index.html`;
        main_title.innerText = `${link.innerText}`;
        console.log(iframe_body);
    })
})



