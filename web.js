// menu button
var button2 = document.querySelector(".button13")
button2.addEventListener("click",function(){
    var targetlocation = 3100;
    window.scrollTo({
        top:targetlocation,
        behaviour:"smooth"
    })
})

// about
var button3 = document.querySelector(".button14")
button3.addEventListener("click",function(){
    var targetlocation = 1500;
    window.scrollTo({
        top:targetlocation,
        behaviour:"smooth"
    })
})

// chefs

var button4 = document.querySelector(".button15")
button4.addEventListener("click",function(){
    var targetlocation = 3900;
    window.scrollTo({
        top:targetlocation,
        behaviour:"smooth"
    })
})

// contacts

var button5 = document.querySelector(".button16")
button5.addEventListener("click",function(){
    var targetlocation = 7000;
    window.scrollTo({
        top:targetlocation,
        behaviour:"smooth"
    })
})

// home
var button1 = document.querySelector(".button12")
button1.addEventListener("click",function(){
    location.reload()
    })



// menu footer click
var scrollLink1 = document.querySelector(".f2")
scrollLink1.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 3100; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// about footer click

var scrollLink2 = document.querySelector(".f3")
scrollLink2.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 1500; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// chef footer click 

var scrollLink3 = document.querySelector(".f4")
scrollLink3.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 3900; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// about us upcoming event click

var scrollLink4 = document.querySelector(".f5")
scrollLink4.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 5700; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// Book a table link footer

var scrollLink5 = document.querySelector(".f6")
scrollLink5.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 4450; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});


// offering link footer

var scrollLink6 = document.querySelector(".f7")
scrollLink6.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 730; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});


// why choose us footer link

var scrollLink7 = document.querySelector(".f8")
scrollLink7.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 5000; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// our strenghts link footer

var scrollLink8 = document.querySelector(".f9")
scrollLink8.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 2250; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// special dish link footer

var scrollLink9 = document.querySelector(".f10")
scrollLink9.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    
    var targetPosition = 4450; 
    
   
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});


// code for sending mails

function sendMail() {
    var templateParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        persons: document.getElementById("persons").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_ne7hw5g", "template_kh93zyn", templateParams).then(
        (response) => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("persons").value = "1-person";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
            document.getElementById("message").value = "";
            console.log(response);
            alert("Success! Your booking request has been sent.");
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        }
    );
}


// code for subscribing
function sendMail1() {
    var templateParams = {
    subscribed: document.getElementById("subscribed").value,
        
    }
    emailjs.send("service_l1ztej9", "template_nikrt37", templateParams).then(
        (response) => {
            document.getElementById("subscribed").value = "";
            alert("Success! You have subscribed successfully.");
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        }
    );
}





























//  function sendMail1(){
//     var params = {
//         Email:document.getElementById("subscribe")
//  }

// emailjs.send("service_l1ztej9","template_nikrt37",params)
// .then(
//     function(res) {
//         alert("Form submitted successfully!"+res.status)}
// )
// .catch(err => console.log(err));

// }
