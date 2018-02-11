
// this is where my responses are
// there is a response for each possibility

const myGenerator = {};

// myGenerator.icebreaker = ['IceBreaker 1', 'IceBreaker 2', 'IceBreaker 3']

myGenerator.mainResponse = {
    family : {
        firstTimeOffender : {
            humorLow: ['Pay me back or I’m gonna tell on you.'],
            humorMed: ['You’re right, I should feel guilty about demanding all the money YOU owe me.'],
            humorHigh: ['It’s all fun and games until someone divides by zero.']
        },
        soSo : {
            humorLow: ['I forget things almost instantly. I think it runs in our family. You forgot you owe me money.'],
            humorMed: ['I’m pretty sure we learned all the same things: be polite, be kind, be responsible, pay your fair share.'],
            humorHigh: ['I guess I could say “forget it, we’re family”, but I don’t want to.']
        },
        wallet: {
            humorLow: ['I’m petty sure you were taught that when you borrow money and you don’t pay it back, it’s called stealing.'],
            humorMed: ['Good family members don’t enable bad habits, so I have to insist that you pay me back.'],
            humorHigh: ['Remember as far as anyone knows, we really are a normal family. That means we pay our bills.']
        } 
    },
    friend: {
        firstTimeOffender: {
            humorLow: ['Do you remember I lent you money, when’s a good time for you to pay me back?'],
            humorMed: ['Are you having those awkward moments when you know you’ve forgotten something but you just don’t know what. I think it might be the money you owe me.'],
            humorHigh: ['Remember always borrow money from a pessimist; they won’t expect you to pay it back. Just so you know, I’m an optimist.']
        },
        soSo: {
            humorLow: ['Did you forget you owe me money?'],
            humorMed: ['Been thinking about you and the money you owe me.'],
            humorHigh: ['I know you owe me money, but I’d rather you just go out and enjoy yourself, said no one ever!']
        },
        wallet: {
            humorLow: ['They say that money talks, but mine just walks away when I’m around you. '],
            humorMed: ['“I am the king of debt. I do love debt. ” – Donald Trump. Don’t be that person? '],
            humorHigh: ['Money doesn’t just talk, it swears. Pay me my #$%%$# money please.']
        }
    },
    coWorker: {
        firstTimeOffender: {
            humorLow: ['I’m so lucky to work with awesome people who always pay their colleagues back really quickly.'],
            humorMed: ['OMG did you get a raise? I didn’t. Please pay me back.'],
            humorHigh: ['The best way to get a colleague to remember you is to borrow money from them. I haven’t forgotten you.']
        },
        soSo: {
            humorLow: ['Am I the only one in the office that feels guilty until I pay back the money I borrowed?'],
            humorMed: ['“I love paying for things and never getting reimbursed” said no one ever.'],
            humorHigh: ['“Cover me,” they said.” I’ll pay you tomorrow”, they said. It’s tomorrow already.']
        },
        wallet: {
            humorLow: ['How about if you pay me the money you owe me and I’ll stop asking questions that make meetings drag on for an extra 20 minutes. '],
            humorMed: ['Let’s avoid those awkward looks across cubicles and boardroom tables cause you know you owe me money.'],
            humorHigh: ['We work in the same place. So you know, I need the money.']
        }
    }
}


myGenerator.events = function(){
    $('form').on('submit', function (event) {
        // make sure that it doesnt reload by preventing the default
        event.preventDefault();

        // when we click on the button that will be on the header then it should send us down. 
    
        // the persons name input needs to be set as a variable and if the person enters nothing then it might need to return something standard also add in trim so that whitespace is removed from the end or beginning
        let personName = $('input[name=name]').val().trim();
        // need to create if statement incase user enters nothing
        if (personName.length === 0) {
            personName = 'you';
        }

        // next is the how much money question. We need to collect the user input, give it a variable also add in trim so that whitespace is removed from the end or beginning
        let money = $('input[name=money]').val().trim();
        // create an amount in case the person enters no money amount
        if (money.length === 1) {
            money = 'the small amount you owe me';
        } else if (money.length === 0) {
            money = 'the money'
        }
                

        // next is the reason input, collect the user input and give it a variable also add in trim so that whitespace is removed from the end or beginning
        let reason = $('input[name=reason]').val().trim();
        if (reason.length === 0) {
            reason = '...you know';
        }
        // lets add in a default backup value for 

        // here is the javascript for the button inputs
        // the relationship question begins here
        
        const relationship = $('input[name=answerRelationship]:checked').val();


        // the history question begins here
        
        const history = $('input[name=answerHistory]:checked').val();

        // the humor question begins here

        const humor = $('input[name=answerHumor]:checked').val();

        // the opener questions begin here

        // create a random number that can be used to

        const opener = $('input[name=answerOpener]:checked').val();


        let generatedResponses = myGenerator.mainResponse[relationship][history][humor];

        // console.log (generatedResponses);


        $('.answer .output').html(`<p class="output">Hey ${personName}, 
        I hope you are doing well. I'm reaching out since you haven't gotten back to me. ${generatedResponses} Please pay me ${money} for ${reason}.</p>`);
        
        $('.answer .barTop .barTop__name').html(`<p class="barTop__name">${personName}</p>`);
       
        // here is the JS used for styling purposes 
 

        // make the output disappear if the reset is clicked
        $('button.reset').on('click', function () {
            $('.answer .barTop .barTop__name').empty();
        });

        $('button.reset').on('click', function () {
            $('.answer .answer__wrapper .output').empty();
        });

        $('button.tryAgain').on('click', function () {
            $('.answer .answer__wrapper .output').empty();
        });

        // scroll down after the button is pressed to see result in iphone like screen
        $('a').smoothScroll({
            speed: 800
        });

        $('.header__button').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#tryAgainScroll').offset().top
            }, 600);
        });

        $('.submit').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#answer').offset().top
            }, 600);
        });

        $('.tryAgain').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#tryAgainScroll').offset().top
            }, 600);
        });

    });
}

// init function needs to happen as soon as the page loads
myGenerator.init = function() {
    myGenerator.events();
}

// create a document ready that includes and calls the events from everything we mentioned prior
$(function () {
    myGenerator.init();
});
