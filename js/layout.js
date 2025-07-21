
export function createElement (tag, className, parent) {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  if (parent) parent.appendChild(el);
  return el;
}

export function generateTime () {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    return `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
}

export function createHeader () {
    const container = createElement("div", "container", document.body);
    const headerContainer = createElement("div", "header__container", container);

    function createLogo () {
        
        const logoContainer = createElement("div", "header__logo-container", headerContainer);
        const logoImg = createElement("img", "header__logo-img", logoContainer);
        logoImg.src = "/assets/img/cloudy-sunny.svg";
        logoImg.alt = "logo"
        const logoName = createElement("p", "header__logo-name", logoContainer);
        logoName.textContent = "WeatherMe";
        const logoTime = createElement("p", "header__logo-time", logoContainer);
        logoTime.textContent = generateTime();
    
        setInterval(() => {
            logoTime.textContent = generateTime();
        }, 100);
    }
   
  function createNav () {
    const navContainer = createElement("ul", "header__nav-container", headerContainer);
    const today = ("li", "header__nav-tabs header__nav-tabs-active", navContainer);
    today.textContent = "Today";
    const tommorow = createElement("li", "header__nav-tabs", navContainer);
    tommorow.textContent = "Tomorrow";
    const monthly = createElement("li", "header__nav-tabs", navContainer);
    monthly.textContent = "Monthly Forecast";
   }

    createLogo();
    createNav();
} 

