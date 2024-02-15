const d = document,
menubtns = d.querySelectorAll(".destination_menu button");

menubtns.forEach((item)=>{
    item.addEventListener('click',()=>{
        menubtns.forEach((item2)=>{
            item2.classList.remove("btn_active");
        });

        item.classList.add("btn_active");
        const activebtn = document.querySelector(".btn_active"),
        img = document.querySelector(".imgbox img"),
        title = document.querySelector(".title"),
        descraption = document.querySelector(".descraption"),
        travel_data_left =  document.querySelector(".travel_data .left"),
        travel_data_right = document.querySelector(".travel_data .right");
        if (activebtn.innerHTML === "MOON") {
          img.src = "assets/destination/image-moon.png";
          title.innerHTML = "MOON";
          descraption.innerHTML = `See our planet as you’ve never seen it before. A perfect
          <br> relaxing trip away to help 
          regain perspective and come back<br> refreshed. While you’re there, take in some history 
          by visiting<br> the Luna 2 and Apollo 11 landing sites.`;
          travel_data_left.innerHTML = `<span>AVG. DISTANCE</span><br>384,400 KM`;
          travel_data_right.innerHTML = `<span>EST. TRAVEL TIME</span><br>3 DAYS`;  
        }
        if (activebtn.innerHTML === "MARS") {
            img.src = "./assets/destination/image-mars.png";
            title.innerHTML = "MARS";
            descraption.innerHTML = `Don’t forget to pack your hiking boots.<br>
             You’ll need them to tackle Olympus Mons,<br> the tallest planetary
              mountain in our solar system.<br> It’s two and a half times the size of Everest!`;
              travel_data_left.innerHTML = `<span>AVG. DISTANCE</span><br>225 mil. KM`;
              travel_data_right.innerHTML = `<span>EST. TRAVEL TIME</span><br>9 MONTHS`; 
        }
        if (activebtn.innerHTML === "EUROPA") {
            img.src = "./assets/destination/image-europa.png";
            title.innerHTML = "EUROPA";
            descraption.innerHTML = `The smallest of the four Galilean moons orbiting Jupiter,<br> 
            Europa is a winter lover’s dream. With an icy surface,<br> it’s perfect for a bit of
             ice skating, curling, hockey, or simple<br> relaxation in your snug wintery cabin.`;
             travel_data_left.innerHTML = `<span>AVG. DISTANCE</span><br>628 mil. KM`;
             travel_data_right.innerHTML = `<span>EST. TRAVEL TIME</span><br>3 YEARS`; 
        }
        if (activebtn.innerHTML === "TITAN") {
            img.src = "./assets/destination/image-titan.png";
            title.innerHTML = "TITAN";
            descraption.innerHTML = `The only moon known to have a dense atmosphere<br> other than Earth,
             Titan is a home away from home<br> 
            (just a few hundred degrees colder!). As a bonus,<br> 
            you get striking views of the Rings of Saturn.`;
            travel_data_left.innerHTML = `<span>AVG. DISTANCE</span><br>1.6 bil. KM`;
            travel_data_right.innerHTML = `<span>EST. TRAVEL TIME</span><br>7 YEARS`; 
        }
    });
});