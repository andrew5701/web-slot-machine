
$(document).ready(function(){

    let balance = 50;

    let bet = 1;
    $('#bet').text(bet);
    // Increment the amount when + button is clicked
    $('#plus').click(function(){
        $('#bet').text(++bet);
    });
    // Decrement the amount when - button is clicked
    $('#minus').click(function(){
        if(bet > 1){
            $('#bet').text(--bet);
        }});

    const images = ['images/cherry.png', 'images/grapes.png', 'images/heart.png', 'images/lemon.png', 'images/orange.png', 'images/seven.png', 'images/strawberry.png'];
    let index = 0;
    let counter = 0;
    let multiplier = 15;


    function randomNum(){
        return Math.floor(images.length * Math.random());
    }

    function changeText() {
        if(balance >= bet) {
            if ($('#i1').attr('src') === $('#i2').attr('src') && $('#i1').attr('src') === $('#i3').attr('src')) {
                balance = balance + bet * multiplier;
                $('#balance').text(balance);
                $('#heading').text('Congratulations! You won!').css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            } else {


                $('#heading').text('You lost, spin again.').css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            }
        }
        else{
            if(balance === 0){
                $('#heading').text('You lost all your money!').css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            }
            else {
                $('#heading').text('Invalid bet amount, you do not have enough money to bet $' + bet).css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            }
        }


    }

    let counters = [0, 0, 0];
    let timer1;
    let timer2;
    let timer3;

    let timers = [timer1, timer2, timer3];


    $('#spin').click(function () {


        if(balance >= bet) {
            balance = balance - bet;
            $('#balance').text(balance);

            $('#heading').text('Spinning...').css('color', 'black');
            $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);


            let changeAmount = 0;


            $('img').each(function (index, element) {


                console.log(index);
                timers[index] = setInterval(function rotate() {
                    //console.log(image.src);
                    counters[index]++;
                    console.log(counters[index]);
                    $(element).attr('src', images[randomNum()]);

                    if (index == 0) {

                        if (counters[index] === 20) { // 20 is just an arbitrary number, but it could be any value you assign.

                            clearInterval(timers[index]);
                        }
                    } else if (index == 1) {
                        if (counters[index] === 30) { // 20 is just an arbitrary number, but it could be any value you assign.

                            clearInterval(timers[index]);
                        }
                    } else {
                        if (counters[index] === 50) { // 20 is just an arbitrary number, but it could be any value you assign.

                            clearInterval(timers[index]);
                            changeText();
                        }
                    }

                }, 100);
                counters[0] = 0;
                counters[1] = 0;
                counters[2] = 0;
            });


        }

        else{
            if(balance === 0){
                $('#heading').text('You lost all your money!').css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            }
            else {
                $('#heading').text('Invalid bet amount, you do not have enough money to bet $' + bet).css('color', 'red');
                $('#heading').fadeTo(100, 0.1).fadeTo(200, 1);
            }
        }







    });



















});

