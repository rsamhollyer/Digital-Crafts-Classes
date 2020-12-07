// semi-colons?
// When does JS get confused if you leave out the semi-colons?

function returnObj() {
    // Automatic Semicolon Insertion
    // ASI - most devs think this is a design flaw
    return (
        {
            name: 'Oakley'
        }
    )
    
}

//console.log(returnObj());



// re: ian's code

const hey = () => console.log('hello');
const hush = () => console.log('shhhh');

function callMe(n, f1, f2) {
    try { // if-there-is-an-error/else
        n = parseInt(n, 10);
        console.log('finished doing parseInt', n);
        if (isNaN(n)) {
            n = 2;
            throw Error('does not compute');
        }        
    } catch (e) {
        console.log(e);
        // To leave without continuing the function, use:
        return;
        // You cannot use break - break only works for loops
    }

    // if (isNaN(n)) {
    //     n = 2;
    // }

    // JS does "type coercion"
    // DIRs! Please search for JavaScript WAT video
    // gary bernhardt
    if (n % 2 === 0) {
        f1();
    } else if (n % 2 !== 0) {
        f2();
    } else {
        console.log('nope');
    }
}
// You cannot skip arguments
callMe("oakley", hey, hush);