const $ = document,
hambegermenu = $.querySelector(".menubtn"),
menucontent = $.querySelector(".header .menu"),
closebtn = $.querySelector(".closebtn"),
explorebtn = $.querySelector(".btn");

hambegermenu.addEventListener('click',()=>{
    menucontent.style.display = "block";
    closebtn.style.display = "block";
});
closebtn.addEventListener('click',()=>{
    menucontent.style.display = "none";
    closebtn.style.display = "none";
});
explorebtn.addEventListener('click',()=>{
    window.location.assign('destination.html');
});