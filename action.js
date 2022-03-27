let wisdom = ['Most people are creatures of pure hindsight', 'Always seek to create a third way; people will always have you beleive that there are only two, of which they are at the center',
'Always respect your superiors, if you have any', 'all things change in a dynamic environment, your efforts to remain what you are is what limits you...and all environments are dynamic',
'Great spirits have always encountered opposition from mediocre minds', 'Concepts only have meaning if we can point to objects to which they refer and rules by which they are assigned to these objects', 
'Prosperity is the best protector of principle', '...what is called "freedom of will" is essentially the affect of superiority over him who must obey...', '...[professionals] trained to make distinctions rather than to see connections',
'...they [professionals] smother analysis and prevent clarification by a welter of conceptual terms...'];

let buttonTarget = document.getElementById('button');
let wisdomTarget = document.getElementById('wisdom-para');

function wisdomSelector () {
    let randomWisdom = Math.floor(Math.random()*wisdom.length);
    return wisdom[randomWisdom];
}

function showWisdom () {
    wisdomTarget.innerHTML = wisdomSelector;
    buttonTarget.innerHTML = 'Deal with it!';
    buttonTarget.style.cursor = 'default';
    buttonTarget.style.color = 'white';
    //buttonTarget.removeEventListener(click, showWisdom);
}

buttonTarget.addEventListener(click, showWisdom);
