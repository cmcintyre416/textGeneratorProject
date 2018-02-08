// this is where my responses are
// there is a response for each possibility

const myGenerator = {};

myGenerator.icebreaker = ['IceBreaker 1', 'IceBreaker 2', 'IceBreaker 3']

myGenerator.mainResponse = {
    family : {
        firstTimeOffender : {
            humorLow : [''],
            humorMed : [''],
            humorHigh : ['']
        },
        soSo : {
            humorLow: [''],
            humorMed : [''],
            humorHigh : ['']
        },
        wallet: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        }
    },
    friend: {
        firstTimeOffender: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        },
        soSo: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        },
        wallet: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        }
    },
    acquaintance: {
        firstTimeOffender: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        },
        soSo: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        },
        soSo: {
            humorLow: [''],
            humorMed: [''],
            humorHigh: ['']
        }
    }
}


myGenerator.events = function(){
    $('form').on('submit', function (event) {
        // make sure that it doesnt reload by preventing the default
        event.preventDefault();

        // the persons name input needs to be set as a variable and if the person enters nothing then it might need to return something standard also add in trim so that whitespace is removed from the end or beginning
        let personName = $('input[name=name]').val().trim();
        // need to create if statement incase user enters nothing
        if (personName.length === 0) {
            personName = 'you';
        }

        // next is the how much money question. We need to collect the user input, give it a variable also add in trim so that whitespace is removed from the end or beginning
        let money = $('input[name=money]').val().trim();
        // create an amount in case the person enters no money amount
        if (money.length === 0) {
            money = 'a sum of money';
        }

        // next is the reason input, collect the user input and give it a variable also add in trim so that whitespace is removed from the end or beginning
        let reason = $('input[name=reason]').val().trim();
        if (reason.length === 0) {
            reason = 'for...you know,';
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

        const opener = $('input[name=answerOpener]:checked').val();


        let generatedResponses = myGenerator.mainResponse[relationship][history][humor];
        console.log (generatedResponses);
        

    });
}

// init function needs to happen as soon as the page loads


// create a document ready that includes and calls the events from everything we mentioned prior
$(function () {
    myGenerator.events();
});







// relationship - string, history - string, humor - int
// function addResponse(relationship,history,humor,response){
//     mainResponse[relationship][history][humor]=(response);
// }

// function getResponse(relationship,history,humor){
//     return mainResponse[relationship][history][humor];
// }

// addResponse("family","firstTimeOffender",0,"Take your time...");

// let $relationship;


// on submit
// $('.answer').append(`<div class="answer">${getResponse($relationship)}</div>`)

