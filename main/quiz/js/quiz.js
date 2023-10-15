function quiz(){
    let score = 0;
    let badge = "";

    if(prompt("1. What is the name of our website ? 1)CINEMAHIVE 2)NETFLIX 3)AMAZON ") == 1){
        score = score + 2;
    }else{
        score = score - 1;
    }
    if(prompt("2. Where do we located ? 1)AUSTRALIA 2)SRI LANKA 3)UAE") == 2){
        score = score + 2;
    }else{
        score = score - 1;
    }
    if(prompt("3. What kind of recommendation type we Offer ? 1)BOOKS 2)MOVIES 3)MUSICS") == 2){
        score = score + 2;
    }else{
        score = score - 1;
    }
    if(prompt("4. For which movie our video on homepage belongs to ? 1)SPIDER MAN 2)HULK 3)BEN10 ") == 1){
        score = score + 2;
    }else{
        score = score - 1;
    }
    if(prompt("5. From the listed catogories which catogory we dont sell ? 1)JEWELLERY 2)MOVIE DVD 3)MOVIE CHARACTER MTOYS ") == 1){
        score = score + 2;
    }else{
        score = score - 1;
    }

    if(score > 7){
        badge = "Gold";
        alert("Congradulations! You have earned " + score + " points with a " + badge + " badge. Please claim the points in your next purchase.")
        let text = score.toString();
        localStorage.setItem("test1", text);
    }
    else if(score > 5){
        badge = "silver";
        alert("Congradulations! You have earned " + score + " points with a " + badge + " badge. Please claim the points in your next purchase.")
        let text = score.toString();
        localStorage.setItem("test1", text);
    }
    else if(score > 0){
        badge = "bronze";
        alert("Congradulations! You have earned " + score + " points with a " + badge + " badge. Please claim the points in your next purchase.")
        let text = score.toString();
        localStorage.setItem("test1", text);
    }
    else{
        alert("You are failed badly!!!")
        let text = score.toString();
        localStorage.setItem("test1", text);
    }}

