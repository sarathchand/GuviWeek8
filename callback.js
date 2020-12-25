let p =document.createElement('p');
p.setAttribute('id','timer');
document.body.append(p);

setTimeout(function() {  
    document.getElementById('timer').innerHTML=10;
    console.log("This message is shown after 1 seconds");
    setTimeout(function(){
        document.getElementById('timer').innerHTML=9;
        console.log("This message is shown after 2 seconds");
        setTimeout(function(){
            document.getElementById('timer').innerHTML=8;
            console.log("This message is shown after 3 seconds");
            setTimeout(function(){
                document.getElementById('timer').innerHTML=7;
                console.log("This message is shown after 4 seconds");
                setTimeout(function(){
                    document.getElementById('timer').innerHTML=6;
                    console.log("This message is shown after 5 seconds");
                    setTimeout(function(){
                        document.getElementById('timer').innerHTML=5;
                        console.log("This message is shown after 6 seconds");
                        setTimeout(function(){
                            document.getElementById('timer').innerHTML=4;
                            console.log("This message is shown after 7 seconds");
                            setTimeout(function(){
                                document.getElementById('timer').innerHTML=3;
                                console.log("This message is shown after 8 seconds");
                                setTimeout(function(){
                                    document.getElementById('timer').innerHTML=2;
                                    console.log("This message is shown after 9 seconds");
                                    setTimeout(function(){
                                        document.getElementById('timer').innerHTML=1;
                                        console.log("This message is shown after 10 seconds");
                                        setTimeout(function(){
                                            document.getElementById('timer').innerHTML="Happy Independence Day!!"
                                          
                                        },1000)

                                    },1000)

                                },1000)

                            },1000)

                        },1000)

                    },1000)

                },1000)

            },1000)

        },1000)


    },1000);
}, 1000);