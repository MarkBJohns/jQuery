console.log('jQuery');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const redText=document.querySelector('.red');
const greenText=document.querySelector('.green');
const blueText=document.querySelector('.blue');
const changeText=document.querySelector('.change');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//                                                 JQUERY

// ----------------------------------------------------------------------------------------------------------------

// For most common coding languages, there's something called a 'library', which takes more complex code from the 
//      language and converts it into more semantically simple code. One of the more popular libraries for 
//      JavaScript is jQuery. While it's on the downswing and not particularly popular lately, it was extremely
//      prevelant for several years, and it's the most commonly used by corporate/professional developers, 
//      especially among the biggest and most successful companies, so it's still beneficial to understand it.

// It's also extremely fast, so simple projects that need to quickly make their way out the door can comfortably
//      rely on it.

// ----------------------------------------------------------------------------------------------------------------

//          https://code.jquery.com/

// --------------------------------------------------------------

// To run jQuery on your file, click on the link above and find the most recent version. Click 'minify' to get
//      the script tag, then copy and paste it into your html file. Now test it by typing 'jQuery' into the
//      console, and if it's recognized, you're good to go.

// ----------------------------------------------------------------------------------------------------------------

//      SELECTING ELEMENTS

// --------------------------------------------------------------

// Similar to how vanilla JavaScript uses CSS selectors, you can select elements with jQuery by using '$' and the
//      tag name:

// $('h1') = document.querySelector('h1'),

// $('li') = document.querySelectorAll('li'),

// etc.

//      This dollar sign is actually a reference to the function 'jQuery()', meaning that "$('.header')" is
//      effectively the same as "jQuery('.header')".

// --------------------------------------------------------------

// Enter $('h1') into the console, and instead of returning a node list, it returns something called a 
//      'jQuery object'. The jQuery objects are wrapped around the node lists, which give them access to
//      jQuery library. If we want to get the node list via jQuery, we can use the 'get()' method, which
//      will return the node list inside that jQuery object, but notably, it will return it as an actual
//      array, with all the functionality that comes with it.

// ----------------------------------------------------------------------------------------------------------------

//      METHODS

// --------------------------------------------------------------

// jQuery has several new methods, but also a lot that compare to regular, vanilla JavaScript. One benefit of 
//      jQuery over vanilla is that the jQuery methods often do double work as the 'set' and 'get' functions.
//      

// If we wanted to get a list of all the colors in our ul element, vanilla JS would be relatively complicated:

//           const colors=document.querySelectorAll('li');
//           colors.forEach((li)=>
//                console.log(li.textContent);
//           });

//      Whereas jQ makes it much, much simpler by only using the text() method:

//           $('li').text()

//      The jQ method is not only simpler and faster, but returns it as a string rather than four separate 
//      returns. It also doesn't require creating a variable first. You can also use the same function to
//      change the text:

//           $('li').text('Colors')

//      Now instead of creating a variable and running a forEach() method, we can just select everything that
//      has the 'li' tag and change it in a single line of code.

// --------------------------------------------------------------

//          ATTR()

// --------------------------------------------------------------

// You can use the attr() method to change attributes of various elements, and even add key/value pairs to
//      objects:

const darkType={
    src:    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dg5qm1n-f4069a9e-e365-418a-ae38-e2507d423e7a.png/v1/fit/w_828,h_828/dark_type_symbol_paldea_by_jormxdos_dg5qm1n-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGc1cW0xbi1mNDA2OWE5ZS1lMzY1LTQxOGEtYWUzOC1lMjUwN2Q0MjNlN2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3GBd9vmxb2g7ViRPNYs7KMdcDuwQH5lziPlQi5uRQLw',
    alt:    'dark-type-logo'
};

const dragonType={
    src:    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dg5qm1c-34ee7460-5dc7-42d9-ba8e-fa021afeb7e2.png/v1/fit/w_828,h_828/dragon_type_symbol_paldea_by_jormxdos_dg5qm1c-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGc1cW0xYy0zNGVlNzQ2MC01ZGM3LTQyZDktYmE4ZS1mYTAyMWFmZWI3ZTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J60JVngpNX4LJpYFYeySMx87tYxbqPppDElfSsghM34',
    alt:    'dragon-type-logo'
};

const figthingType={
    src:    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dg5qlys-bd5a35fd-8453-47bb-998b-142b7c08982e.png/v1/fit/w_828,h_828/fighting_type_symbol_paldea_by_jormxdos_dg5qlys-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGc1cWx5cy1iZDVhMzVmZC04NDUzLTQ3YmItOTk4Yi0xNDJiN2MwODk4MmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3SLzXDyYiYAGlTBJiEleQINYjeP08E8wiDkfBeImIzU',
    alt:    'fighting-type-logo'
}

//      You can enter $('img').attr(____) into the console with any of the above objects as a parameter,
//      and it will change every image on the webpage to the new picture with the new alt text.

// If you don't want the automatical behavior of changing every instance of 'img', you can add ':eq(x)',
//      to the end of your selector, replacing 'x' with the index number:

// $('img:eq(0)').attr(darkType),     $('img:eq(1)').attr(figthingType),     $('img:eq(2)').attr(dragonType)

//      or, you can add the 'eq' outside of the selector:

// $('img').eq(0).attr(fightingType),     $('img').eq(1).attr(dragonType),     $('img').eq(2).attr(darkType)

// --------------------------------------------------------------

//          VAL()

// --------------------------------------------------------------

// You can also use val() to get and set the value of an element:

// $('input').val() = '',     $('input').val('hello') = all four inputs now say 'hello'

//      This is super useful if you want to completely reset all inputs, as you can empty every input
//      field with a single line of code:

// $('input').val('')

// ----------------------------------------------------------------------------------------------------------------

//      CSS AND CLASSES

// --------------------------------------------------------------

// Going back to the list of colors, you can use jQ to find and set the colors of html elements:

//          $('li').eq(0).css('color') = "rgb(255,0,0)"
//          $('li').eq(1).css('color') = "rgb(0,128,0)"
//          $('li').eq(2).css('color') = "rgb(0,0,255)"
//          $('li').eq(3).css('color') = "rgb(128,0,128)"

//      And like every other jQ method, you can also use it to set new css properties. Say you wanted to change
//      the color of the hr elements to blue:

//          $('hr').css('border-color','blue');

//      This works for any css property, just keep in mind that you need to use the hypenated names rather than
//      JavaScript camel casing.

// --------------------------------------------------------------

// You can also pass in variables, so as as shortcut, you can make objects designed as CSS properties and pass
//      those objects into jQ commands:

const yellowText={color:'yellow'};

//      Now if you were to enter $('h1').css(yellowText) into the console, the header would become yellow. This
//      particular instance isn't groundbreaking, but you can make much more complex css objects and make 
//      multiple changes to an html element in a single command.

const paragraphText={
    color           :   'whitesmoke',
    'text-align'    :   'right',
    'font-size'     :   '20px',
    'text-shadow'   :   '-2px -2px blue'
}

//      Enter $('p').css(paragrophText) into the console and four major changes will take place with a single 
//      command, rather than having to make four individual css commands.

// However, this can be a pretty taxing change for your browser, as even though you're only inputting one 
//      command, the browser is still running several lines of code through a loop for every element of its 
//      kind. The better way to make these changes is to change just the class of the elements, and have the 
//      class styles saved on your css file.

//          $('p').addClass('para');

//      jQ has an addClass() method that does exactly what it sounds like, so entering that into the console 
//      can apply any changes you want via adding that class to it. In addition, you can remove classes with
//      removeClass(), toggle classes with toggleClass(), or check to see if the element includes a class with
//      hasClass().

// ----------------------------------------------------------------------------------------------------------------

//      CHAINING METHODS

// --------------------------------------------------------------

// Say you wanted to add a color to the colors list:

const $li='<li></li>';
$('ul').eq(0).append($li);

//      Now you have an empty li element, but you want to add content to it. You could write two different 
//      commands to add it:

$('li').eq(4).text('Yellow');
$('li').eq(4).addClass('yellow');

//      And this works fine, but it's an entire extra command that's completely unnecessary. Instead, you can
//      chain multiple methods together to change everything in a single command:

$('ul').eq(0).append($li);
$('li').eq(5).text('Orange').addClass('orange');

// ----------------------------------------------------------------------------------------------------------------

//      TRAVERSAL

// --------------------------------------------------------------

// There are several methods for jQ that exist just as a means to navigate all of the elements on the webpage:

//      1 .find(selector)
//          selects all the elements that are descendants of a specified element, filtered by a selector.
//              $('ul').eq(0).find('li') = would return all our colors

//      2 .children(selector)
//          gets the immediate children of each element in the set of matched elements, optionally filtered by
//          a selector
//              $('section').children() = would return each of our elemental logos and the four inputs,
//              $('section').children('img') = would return just the elemental logos

//      3 .parent('selector')
//          gets the parent of each element in the current set of matched elements, optionall filtered by a 
//          selector
//              $('li').parent() = would return the ul element

//      4 .siblings('selector')
//          gets the siblings in each set of matched elements, optionally filtered by a selector
//              $('img').siblings() = would return the other images

//      5 .prev(selector)
//          gets the sibling immediately before the specified element, optionally filtered by a selector
//              $('li').eq(3).prev() = would return 'Purple', the li before Yellow

//      6 .next(selector)
//          gets the sibling immediately after the specified element, optionally filtered by a selector
//              $('li').eq(0).next() = would return 'Green', the li after Red

//      7 .first()
//          reduces the set of matched elements to the first one in the set
//              $('li').first = would return 'Red'

//      8 .last()
//          reduces the set of matched elements to the last one in the set
//              $('li').last() = would return 'Orange'

// ----------------------------------------------------------------------------------------------------------------

//      APPEND

// --------------------------------------------------------------

// We've already seen append() for the chaining method, but here's a better rundown of how it works. There are 
//      multiple methods for adding elements: append(), prepend(), and appendTo()/prependTo(). These will add
//      the element before or after the specified element, prepend() will add it before, and appendTo() is useful
//      for elements that are currently being created. For example:

//      Say we want to create headline for our elemental logos. If you use the $() function to write html, the
//      browser knows that you're trying to create a new element. You can also add whatever css properties you
//      want, but it won't actually show up until you specify where you want it.

$('<h2>').addClass('strong-font').text('Elemental Logos').prependTo('section:eq(0)');

//      Now in one line, you've created an h2 element, added a class to it, specified the text you want inside, 
//      and specified where to put it in the webpage. The vanilla JavaScript code would have been something like:

// const elementalLogos=document.querySelectorAll('section')[0];
// const logoHeadline=document.createElement('h2');
// logoHeadline.textContent='Elemental Logos';
// logoHeadline.classList.add('strong-font');
// elementalLogos.prepend(logoHeadline);

//      to accomplish the same thing.

// The choice of append/prepend vs appendTo/prependTo is largely aesthetic and comes down to whatever feels more
//      intuitive in your work flow. For example, if I wanted to add more color options, the more complex coding
//      happens in the li creation, so appendTo() would make more sense:

$('<li>').addClass('pink').text('Pink').appendTo('ul:eq(0)');
$('<li>').addClass('brown').text('Brown').appendTo('ul:eq(0)');

//      While if I wanted to add a radio button the end of each li, the radio input is more complicated, so it
//      makes more sense to use append().

$('li').append('<input type="radio" name="color"/>');

// ----------------------------------------------------------------------------------------------------------------

//      EVENTS

// --------------------------------------------------------------

// Events work in a similar way with jQ, with a specified user input and a corresponding function. There are
//      multiple default event methods such as click(), submit(), change(), focus(), etc, but the one closest to
//      vanilla and the one that's generally optimal is on(), which takes two parameters: the user input, and the
//      function. Look at the event below, where filling a radio button takes the class name of its parent li
//      element and uses that to change the background color of our h1. The on() fuction takes the 'click' event
//      to activate the function, much like vanilla's addEventListener('click',function()).

$(document).ready(function(){
    $('input[type="radio"]').on('click',function(){
        var className=$(this).parent().attr('class');
        $('h1').css('background-color',className);
    });
});

// --------------------------------------------------------------

//      EVENT DELEGATION

// --------------------------------------------------------------

// Say you have events that are dynamically creating new html elements, such as the 'Add input' button.

$(document).ready(function(){
    $('button').on('click',function(){
        $('<input type="text"/>').appendTo('section:eq(2)');
    })
})

// We also have an event where focusing on a text input will change the background color:

// $(document).ready(function(){
//     $('input[type="text"]').on('focus',function(){
//         $('input[type="text"]').css('background-color','');
//         $(this).css('background-color','skyblue');
//     })
// })

//      Now an issue arises when we click the button to create a new text input. Even though our event is 
//      supposed to change the color whenever the user focuses on it, the new text inputs we're creating aren't
//      on the wepbage when the event gets run. We have a work-around with jQ that allows us to put a third
//      parameter in our event listener, so we can make the event scope apply to everything without sacrificing
//      specificity:

$(document).ready(function(){
    $('body').on('focus','input[type="text"]',function(){
        $('input[type="text"]').css('background-color','');
        $(this).css('background-color','skyblue');
    })
})

// Now the event applies to the whole body of the webpage, but still only activates for the text inputs in the
//      body, allowing us to create as many new inputs as we want without sacrificing the functionality of any
//      of those inputs. You can use this new middle parameter for a multiple css selectors, includes id's and 
//      classes.