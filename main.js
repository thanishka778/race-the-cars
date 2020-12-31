canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_img="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="car02.png";
car2_x=10;
car2_y=100;

var background_img="race track canvas bg.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(key_pressed=="38"){
        car1_up();
        console.log("up");
    }

    if(key_pressed=="40"){
        car1_down();
        console.log("down");
    }
    
    if(key_pressed=="37"){
        car1_left();
        console.log("left");
    }

    if(key_pressed=="39"){
        car1_right();
        console.log("right");
    }

    if(key_pressed=="87"){
        car2_up();
        console.log("w key");
    }

    if(key_pressed=="83"){
        car2_down();
        console.log("s key");
    }

    if(key_pressed=="65"){
        car2_left();
        console.log("a key");
    }

    if(key_pressed=="68"){
        car2_right();
        console.log("d key");
    }

    
}

function car1_up(){
    if (car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed: x="+ car1_x + "|y="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car1_down(){
    if (car1_y<=400)
    {
        car1_y=car1_y+10;
        console.log("when down arrow is pressed: x="+ car1_x + "|y="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car1_left(){
    if (car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when left arrow is pressed: x="+ car1_x + "|y="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car1_right(){
    if (car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when right arrow is pressed: x="+ car1_x + "|y="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}



function car2_up(){
    if (car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when w key is pressed: x="+ car2_x + "|y="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car2_down(){
    if (car2_y<=400)
    {
        car2_y=car2_y+10;
        console.log("when s key is pressed: x="+ car2_x + "|y="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car2_left(){
    if (car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when a key is pressed: x="+ car2_x + "|y="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car2_right(){
    if (car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when d key is pressed: x="+ car2_x + "|y="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }

    if(car1_x > 700){
        console.log("Car 1 won");
        document.getElementById("game_status").innerHTML="Car 1 won!!";
    }
    
    if(car2_x > 700){
        console.log("Car 2 won");
        document.getElementById("game_status").innerHTML="Car 2 won!!";
    }
}


