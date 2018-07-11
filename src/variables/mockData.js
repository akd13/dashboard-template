var team_1_bar_data = [
  {Day: 'Mon',  Seats: 9},
  {Day: 'Tue',  Seats: 10},
  {Day: 'Wed',  Seats: 11},
  {Day: 'Thu',  Seats: 10},
  {Day: 'Fri',  Seats: 7},
];

var team_2_bar_data = [
  {Day: 'Mon',  Seats: 13},
  {Day: 'Tue',  Seats: 12},
  {Day: 'Wed',  Seats: 18},
  {Day: 'Thu',  Seats: 16},
  {Day: 'Fri',  Seats: 10},
];

var team_3_bar_data = [
  {Day: 'Mon',  Seats: 9},
  {Day: 'Tue',  Seats: 4},
  {Day: 'Wed',  Seats: 6},
  {Day: 'Thu',  Seats: 8},
  {Day: 'Fri',  Seats: 5},
];

export var bar_data = {
	1: team_1_bar_data,
	2: team_2_bar_data,
	3: team_3_bar_data,
}

var week_data = [
  {name: 'Team 1', value: 23},
  {name: 'Team 2', value: 34},
  {name: 'Team 3', value: 25},
  {name: 'Unoccupied', value: 18},
]

var month_data = [
  {name: 'Team 1', value: 26},
  {name: 'Team 2', value: 46},
  {name: 'Team 3', value: 15},
  {name: 'Unoccupied', value: 13},
]

export var pie_data = {
  1: week_data,
  2: month_data
}