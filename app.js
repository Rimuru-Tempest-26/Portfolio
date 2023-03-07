const hamburger = document.getElementById("hamburger");
let close;

hamburger.addEventListener("click", (_) => {
  const div = document.createElement("div");
  const body = document.getElementsByTagName("body")[0];
  const closeButton = document.createElement("button");
  const portfolio = document.createElement("p");
  const menu = document.createElement("div");
  const headline = document.getElementById("headline");
  const projects = document.getElementById("projects");
  const aboutme = document.getElementById("aboutme");
  const contactus = document.getElementById("contact-us");
  const navbar = document.getElementsByClassName("navbar")[0];

  headline.setAttribute("style", "filter:blur(7px");

  portfolio.innerText = "Portfolio";
  const about = document.createElement("p");
  about.innerText = "About";
  const contact = document.createElement("p");
  contact.innerText = "Contact";
  menu.setAttribute(
    "style",
    "color:#fff;display:flex;flex-direction:column;align-self:start;margin-top:32px;gap:40px;font-style: normal;font-weight: 600;font-size: 32px;line-height: 44px;"
  );
  closeButton.setAttribute("id", "close");
  closeButton.setAttribute(
    "style",
    "color:white;padding: 0;border: none;background: none;display: block;cursor: pointer;z-index:3"
  );
  closeButton.innerHTML = "X";

  hamburger.setAttribute("style", "display:none");
  div.setAttribute("id", "mobile-nav");
  div.setAttribute(
    "style",
    "padding: 25px;flex-direction:column;justify-content: start;display: flex;align-items: end;position:fixed;top:0;right:0;bottom:0;left:0;background-color:#6070FF;opacity: 0.7"
  );

  div.appendChild(closeButton);
  menu.appendChild(portfolio);
  menu.appendChild(about);
  menu.appendChild(contact);
  div.appendChild(menu);
  body.appendChild(div);
  close = document.getElementById("mobile-nav");

  close.addEventListener("click", (_) => {
    hamburger.setAttribute("style", "display:block");
    const remove = document.getElementById("mobile-nav");
    remove.remove();
  });
});