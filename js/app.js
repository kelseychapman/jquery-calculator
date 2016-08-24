$(document).ready(function() {
    console.log("Jquery running!");

    var number1 = '';
    var number2 = '';
    var operator = '';
    var answer = '';
    var newCalc = true;

    $('.digit').on('click', function() { //jquery event listener, listening for a "click"

        //  alert('You clicked a digit!')
        //this pop up a dialog box that tells you an alert

        if(newCalc === false){
          $('#screen').text('');
          newCalc = true;
        }
        var clickedNumber = ($(this).text()) //creating a variable for the text that is clicked wihtin the digit class
            //this.text refers to "digit". this=digit.
            //text refers to the thing inside those div brackets.
            //selecting every digit on click


        $('#screen').append(clickedNumber) //telling the screen id show me the text of what I pass through the text (digit)
            //getting the value of clickedNumber into the screen (id of screen) of the calculator
    })


    //   $('.operator').on('click', function(){
    //       number1 = $('#screen').text()
    //       console.log(number1);

    //line 25-27: test= hey "number" go check out the screen and tell me what is in there.
    //test = expecting to see the number in the screen on the console log
    //})



    $('.operator').on('click', function(event) { //click on an operator
      //when you click on the operator, you get what's on the screen which is the first number
      number1 = $('#screen').text()
      operator = $(this).text()
        $('#screen').text('')
        // if (number1.length > 0) { //if number1 exisits
        //     number2 = $('#screen').text(); //then set number 2
        // } else {
        //     number1 = $('#screen').text(); //if number1 doesnt exist, then set number 1
        // }


        // if (number1 && number2 && operator) {
        //
        //     if (operator === '+') { //if '+' is clicked,
        //         answer = (number1 + number2) //add number1 & number2
        //     } else if (operator === '-') { //if '-' is clicked,
        //         answer = (number1 - number2) //subract number1 & number2
        //     } else if (operator === 'x') { //if '*' is clicked,
        //         answer = (number1 * number2) //multiply number1 & number2
        //     } else if (operator === '÷') { //if '÷' is clicked,
        //         answer = (number1 / number2) //divide number1 & number2
        //     }
        //     $('#screen').text(answer)
        // }
//telling us that an operator was clicked, and whch operator it was

    })
    $('#equals').on('click', function(){
      number2 = $('#screen').text()
      console.log(number2);
      var num1 = parseInt(number1);
      var num2 = parseInt(number2);
      if (number1.length !== 0 && number2.length !== 0 && operator.length !== 0) {
        console.log('hey');
          if (operator === '+') { //if '+' is clicked,
              answer = parseInt(num1 + num2) //add number1 & number2
          } else if (operator === '-') { //if '-' is clicked,
              answer = parseInt(num1 - num2) //subract num1 & num2
          } else if (operator === 'x') { //if '*' is clicked,
              answer = parseInt(num1 * num2) //multiply num1 & num2
          } else if (operator === '÷') { //if '÷' is clicked,
              answer = parseFloat(num1 / num2) //divide num1 & num2
          }
          $('#screen').text(answer)
          newCalc = false;
      }
    })

})
