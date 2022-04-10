let wisdom = ['Most people are creatures of pure hindsight', 'Always seek to create a third way; people will always have you beleive that there are only two, both of which they are at the center',
'Always respect your superiors, if you have any', 'all things change in a dynamic environment, your efforts to remain what you are is what limits you...and all environments are dynamic',
'Great spirits have always encountered opposition from mediocre minds', 'Concepts only have meaning if we can point to objects to which they refer and rules by which they are assigned to these objects', 
'Prosperity is the best protector of principle', '...what is called "freedom of will" is essentially the affect of superiority over him who must obey...', '...[professionals] trained to make distinctions rather than to see connections',
'...they [professionals] smother analysis and prevent clarification by a welter of conceptual terms...', 'sorting something you will never search is a waste,  searching something you never sorted is merely inefficient',
'"smart" is not a competency, it is a vote of confidence', 'There is a limit to how positive things can be. But there is no limit to the depth of negativity. Therefore a pessimist is actually a realist', '"what might have been..." is an essential part of misery', 
'the Beaver told the Rabbit, "no I didn\'t build the Hoover dam but it was based on an idea of mine..."','[Friedrich Nietzsche in Beyond Good and Evil]=> Who has not for the sake of his reputation - sacrificed himself? [consider further] => To kill the soul for the sake of the body (the substrate) - the triumph of the Anti-Christ.',
 '[Friedrich Nietzsche in Beyond Good and Evil]=> One begins to mistrust very clever people when they become embarrassed.', '[Friedrich Nietzsche in Beyond Good and Evil]=> That which is done out of love always takes place beyond good and evil. [consider further]=> However, the consequences for the deed fall well within the pedestrian.',
'[Friedrich Nietzsche in Beyond Good and Evil]=> One has to requite good and ill: but why to precisely the person who did us good or ill? [consider further] Jesus taught us that others can pay our debts with body and blood.', '...this too shall pass...'];

let buttonTarget = document.getElementById('button');
let wisdomTarget = document.getElementById('wisdom-para');

function wisdomSelector () {
    let randomWisdom = Math.floor(Math.random()*wisdom.length);
    return wisdom[randomWisdom];
}


function showWisdom () {
    wisdomTarget.innerHTML = wisdomSelector();
    buttonTarget.innerHTML = 'Deal with it! Click again.';
    //buttonTarget.style.cursor = 'default';
    buttonTarget.style.color = 'white';

    //buttonTarget.removeEventListener(click, showWisdom);
}

buttonTarget.addEventListener('click', showWisdom);
