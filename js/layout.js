export function createEl (tag, className, parent) {
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
  
  export function createHeader (parent = document.body) {
      const container = createEl("div", "container", parent);
      const headerContainer = createEl("div", "header__container", container);
  
      function createLogo () {
          
          const logoContainer = createEl("div", "header__logo-container", headerContainer);
          const logoImg = createEl("img", "header__logo-img", logoContainer);
          logoImg.src = "/assets/img/cloudy-sunny.svg";
          logoImg.alt = "logo"
          const logoName = createEl("p", "header__logo-name", logoContainer);
          logoName.textContent = "WeatherMe";
          const logoTime = createEl("p", "header__logo-time", logoContainer);
          logoTime.textContent = generateTime();
      
          setInterval(() => {
              logoTime.textContent = generateTime();
          }, 100);
      }
     
    function createNav () {
      const navContainer = createEl("ul", "header__nav-container", headerContainer);
      const today = ("li", "header__nav-tabs header__nav-tabs-active", navContainer);
      today.textContent = "Today";
      const tommorow = createEl("li", "header__nav-tabs", navContainer);
      tommorow.textContent = "Tomorrow";
      const monthly = createEl("li", "header__nav-tabs", navContainer);
      monthly.textContent = "Monthly Forecast";
     }
  
     function createSwitch () {
        const unitToggle = createEl("div", "header__unit-toggle", headerContainer);
      
        const cSpan = createEl("span", "header__unit-label", unitToggle);
        cSpan.textContent = "°C";
      
        const label = createEl("label", "header__switch", unitToggle);
      
        const checkbox = createEl("input", "header__checkbox", label);
        checkbox.type = "checkbox";
      
        const slider = createEl("span", "header__slider", label);
      
        const fSpan = createEl("span", "header__unit-label", unitToggle);
        fSpan.textContent = "°F";
      
        return checkbox;
      }
      createLogo();
      createNav();
      createSwitch();
  } 
  