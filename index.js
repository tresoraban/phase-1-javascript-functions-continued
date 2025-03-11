// Define saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Define mondayWork function expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// Define wrapAdjective function
function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
