var prompt = require ('sync-prompt').prompt;
var chalk = require('chalk');

var play=[], home=[], school=[];
var option = prompt('Add to: (p)lay (h)ome (s)chool or (q)uit? ');

while( option != 'q'){
  var activity = prompt('What activity? ');
 if (option === 'p'){
  play.push(activity);
}else if (option === 'h'){
  home.push(activity);
}else{ (option === 's')
  school.push(activity);
}

option = prompt('Add to: (p)lay (h)ome (s)chool or (q)uit? ');
}

console.log(chalk.blue('Play task: ', play));
console.log(chalk.red('Home task: ', home));
console.log(chalk.yellow('School task: ', school));



