const d = document,
btns = d.querySelectorAll(".btn_box span");

btns.forEach((item)=>{
    item.addEventListener("click",()=>{

        btns.forEach((item2)=>{
            item2.classList.remove("num-active");
        });
        item.classList.add("num-active");

        const active = d.querySelector(".num-active"),
        img = d.querySelector(".tech_content img:not(.tech_content img:last-child)"),
        img2 = d.querySelector(".tech_content img:last-child"),
        name = d.querySelector(".name"),
        descraption = d.querySelector(".description");

        if (active.dataset.index === "b0") {
            name.innerHTML = "LAUNCH VEHICLE";
            img.src = "assets/technology/image-launch-vehicle-portrait.jpg";
            img2.src = "assets/technology/image-launch-vehicle-landscape.jpg";
            descraption.innerHTML = `A launch vehicle or carrier rocket is a rocket-propelled<br>vehicle used to carry a 
            payload from Earth's<br>surface to space, usually to Earth orbit or beyond.<br> Our 
            WEB-X carrier rocket is the most powerful<br> in operation. Standing 150 metres tall, 
            it's quite an <br>awe-inspiring sight on the launch pad!`;
        }
        if (active.dataset.index === "b1") {
            name.innerHTML = "SPACEPORT";
            img.src = "./assets/technology/image-spaceport-portrait.jpg";
            img2.src = "./assets/technology/image-spaceport-landscape.jpg";
            descraption.innerHTML = `A spaceport or cosmodrome is a site for launching<br>
             (or receiving) spacecraft,by analogy to the seaport<br>
             for ships or airport for aircraft.Based in 
              the famous Cape<br> Canaveral, our spaceport is ideally situated
               to take<br>
                advantage of the Earth’s rotation for launch.`;
        }
        if (active.dataset.index === "b2") {
            name.innerHTML = "SPACE CAPSULE";
            img.src = "./assets/technology/image-space-capsule-portrait.jpg";
            img2.src = "./assets/technology/image-space-capsule-landscape.jpg";
            descraption.innerHTML = `A space capsule is an often-crewed spacecraft<br>
             that uses a blunt-body reentry capsule to<br>
              reenter the Earth's atmosphere without wings. Our capsule<br>
               is where you'll spend your time during the<br>
                flight. It includes a space gym, cinema, and plenty<br>
                 of other activities to keep you entertained.`;
        }
    })
})