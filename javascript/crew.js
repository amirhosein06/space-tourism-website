const d = document,
bnts = d.querySelectorAll(".btns span");

bnts.forEach((item)=>{
    item.addEventListener("click",()=>{

        bnts.forEach((item2)=>{
            item2.classList.remove("crew_active");
        });
        item.classList.add("crew_active");

        const active = d.querySelector(".crew_active"),
        img = d.querySelector(".right img"),
        rol = d.querySelector(".person"),
        name = d.querySelector(".person-name"),
        bio = d.querySelector(".descraption");

        if (active.dataset.number === "b0") {
            img.src = "./assets/crew/image-douglas-hurley.png";
            img.style.width = "65%";
            rol.innerHTML = "COMMANDER";
            name.innerHTML = "DOUGLAS HURLEY";
            bio.innerHTML = `Douglas Gerald Hurley is an American engineer,<br> former Marine Corps pilot 
            and former NASA astronaut.<br> He launched into space for the third time as <br>
            commander of Crew Dragon Demo-2.`;
            if (window.innerWidth <= 700 ) {
                bio.style.fontSize = "15px";
               };
        }
        if (active.dataset.number === "b1") {
            img.src = "./assets/crew/image-mark-shuttleworth.png";
            img.style.width = "55%";
            rol.innerHTML = "MISSION SPECIALIST";
            name.innerHTML = "MARK SHUTTLEWORTH";
            bio.innerHTML = `Mark Richard Shuttleworth is the founder and CEO of<br> Canonical,
             the company behind the Linux-based<br> Ubuntu operating system.
              Shuttleworth became the first <br>South African to travel
               to space as a space tourist.`;
               if (window.innerWidth <= 700 ) {
                bio.style.fontSize = "15px";
               };
        }
        if (active.dataset.number === "b2") {
            img.src = "./assets/crew/image-victor-glover.png";
            img.style.width = "65%";
            rol.innerHTML = "PILOT";
            name.innerHTML = "VICTOR GLOVER";
            bio.innerHTML = `Pilot on the first operational flight of the SpaceX<br> Crew Dragon
             to the International Space Station. Glover is a commander<br> in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of<br> Expedition 64,
               and served as a station systems flight engineer.`;
               if (window.innerWidth <= 700 ) {
                bio.style.fontSize = "12px";
               };
        }
        if (active.dataset.number === "b3") {
            img.src = "./assets/crew/image-anousheh-ansari.png";
            img.style.width = "65%";
            rol.innerHTML = "FLIGHT ENGINEER";
            name.innerHTML = "ANOUSHEH ANSARI";
            bio.innerHTML = `Anousheh Ansari is an Iranian American engineer<br>
             and co-founder of Prodea Systems.Ansari was the fourth<br>
              self-funded space tourist, the first self-funded<br>
              woman to fly to the ISS, and the first Iranian in space.`;
              if (window.innerWidth <= 700 ) {
                bio.style.fontSize = "15px";
               };
        }
    })
})