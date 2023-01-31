// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol = '*') {
    function flair(word = 'special') {
        return `You are ${symbol}${word}${symbol}!`
    }
return flair;
}

