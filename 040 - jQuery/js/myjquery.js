// Let's see the syntax of jQuery. Here, $ means the jQuery

// Common syntax of jQuery
// $('selector') = action()

// If your website is slow, you don't need to execute your JS before the manipulating the DOM. That's why we execute the jQuery or JS after completion of DOM manipulation.

// You can also write this function like this ( In short way but you have to use main syntax )
// $( function() {} )  - Shortcut function

$(document).ready(function () {


    /**
        There are mainly three types of the selectore in the jQuery :
        1 ) Element selector
        2 ) ID selector
        3 ) Class selector
    **/

    // Examples of the Element Selectors

    // When user click on the h1 element of the html, do it hide
    // $('h1').click()
    // If any user clicks on the h1, then run this function
    $('h1').click(function () {
        console.log('You hide the headings!');
        $('h1').hide()
    })

    // When user clicks on the the one specific element, then hide it only! To do that we use the ( this ) method of the jQuery
    $('h2').click(function () {
        $(this).hide()
    })

    // Example of ID selector

    // You can target by the ID also
    $('#btn').click(function () {
        $('#myid').hide()
    })

    // Example of Clas selector

    // You can target by the Class also
    $('.btn2').click(function () {
        $('.myclass').hide()
    })

    // Clicks on all the elements, and hide them
    $('#btn3').click(function () {
        $('*').hide()
    })

    /* 
        Events in jQuery
        1 ) Mouse events : click, doubleClick, mouseenter, mouseleave
        2 ) Keyboard Events : keypress, keyup, keydown
        3 ) Form events : submit, focus, change, blur etc.
        4 ) Document / Window events : Unload, scroll, load, resize
    */

    // Mouse events : We seen the click event in above example
    $('h3').hover(function () {
        console.log('You hovered on the heading 3!');
    })
    $('h3').dblclick(function () {
        console.log('You double clicked on the heading 3!');
    })
    $('h4').mouseenter(function () {
        console.log('You are in Danger Zone!');
    })
    $('h4').mouseleave(function () {
        console.log('Now, you are safe from the danger zone!');
    })
    $('h4').mouseup(function () {
        console.log('Mouse Up fired!');
    })
    $('h4').mousedown(function () {
        console.log('Mouse down fired!');
    })
    $('h4').on('click', function () {
        console.log('Thanks for clicking!');
    })
    // You can checkout more events on internet and practising it

    // Let's make a animations!
    // Here this function takes two arguments. One is time ( In ms ) and one function. Both arguments are optional.
    $('#hideMe').click(function () {
        $('#loremPara').hide(1000, function () {
            console.log('Your loremPara is hide now!');
        })
    })
    $('#showMe').click(function () {
        $('#loremPara').show(1000, function () {
            console.log('Your loremPara is show now!');
        })
    })
    $('#toggleMe').click(function () {
        $('#loremPara').toggle(1000, function () {
            console.log('Your loremPara is toggle now!');
        })
    })
    $('#fadeOut').click(function () {
        $('#loremPara').fadeOut(3000)
        console.log('Your loremPara is fade out now!');
    })
    $('#fadeIn').click(function () {
        $('#loremPara').fadeIn(3000)
        console.log('Your loremPara is fade in now!');
    })
    $('#slideUp').click(function () {
        $('#loremPara').slideUp(1000)
        console.log('Your loremPara is Slide up now!');
    })
    $('#slideDown').click(function () {
        $('#loremPara').slideDown(1000)
        console.log('Your loremPara is Slide down now!');
    })
    $('#slideToggle').click(function () {
        $('#loremPara').slideToggle(1000)
        console.log('Your loremPara is Slide Toggle now!');
    })


    // Animate function in jQuery : Using this function, we can build a cool animation in jQuery
    $('#divParaBtn').click(function () {
        $('#divPara').animate({
            height: "150px",
            fontSize: 20,
            fontWeight: "bold",
        }, 2000)

        // You can also do like this,

        // $('#divPara').animate({
        //     height: "150px",
        //     fontSize: 20,
        //     fontWeight: "bold",
        // }, "slow")
        // $('#divPara').animate({
        //     height: "150px",
        //     fontSize: 20,
        //     fontWeight: "bold",
        // }, "fast")
    })

    // You can also add the animations like this ( It's called set in Q in jQuery)
    $('#divParaBtn2').click(function () {
        $('#divPara2').animate({
            opacity: 0.2
        }, 1000)
        $('#divPara2').animate({
            opacity: 0.4
        }, 2000)
        $('#divPara2').animate({
            opacity: 0.6
        }, 3000)
        $('#divPara2').animate({
            opacity: 0.8
        }, 4000)
        $('#divPara2').animate({
            opacity: 1
        }, 5000)
    })

    // To stop any animation immediatly, use stop() function of the jQuery
    // $('selector).stop()

    // For DOM manipulation using jQuery

    // To get the text of any html element
    let myText = $('#divPara3').text()
    console.log(myText);
    
    // To Set the other text by giving argument in the text()
    // let setText = $('#divPara3').text('text is set!')
    // console.log(setText);
    
    // To get the entire HTML of the body.
    console.log($('body').html());

    // If you are changes the values of any form fields like textarea or input, use the val()
    // To get the value of the textarea using jQuery
    console.log($('#myTextArea').val());
    // To set the value of the textarea using jQuery
    console.log($('#myTextArea').val('Value of the textarea is changed now!'));
    
    // To clear any element's value or content
    $('#clearBtn').click(function(){
        $('#clear').empty()
        $('#clear').text('Content is clear now!')
    })

    // To remove the element
    console.log($('#remove').remove());
    
    // You can add or remove the classes by using addClass() and removeClass() functions. And you can also toggle the class by using toggleClass().  Try it yourself!

    // To set the CSS for the element using jQuery
    console.log($('#addcss').css('color', 'blue'));
    // OR you can also add mulitple properties at a time
    console.log($('#addcss').css({
        'font-weight': 'bold',
        'font-size': 20,
    }));
    
    // In jQuery, you can use the AJAX with jQuery. You can checkout it on jQuery's official website.

    // So, this is for today. Thank you :)
    
})

