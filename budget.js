<<<<<<< HEAD
let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
=======
let money = +prompt("Ваш бюджет на месяц?", ''),
>>>>>>> master
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

<<<<<<< HEAD
function chooseExpenses() {
	for (let i = 1; i <= 1; i++) {
		 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		 		b = prompt("Во сколько обойдется?", '');
		 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		 	    && a != '' && b != '' && a.length < 50)  {
		 	    console.log('Done!');
		 		appData.expenses[a] = b;
		 	}	else {
		 		console.log('Что-то пошло не так');
		 		i--;
		 	}
		 }
}
chooseExpenses();

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}
}
detectLevel();

function checkSavings() {
     if (appData.savings == true) {
		 let save = +prompt("Какова сумма накоплений?"),
			 percent = +prompt("Под какой процент?");
			 
	appData.monthIncome = (save/100/12*percent).toFixed();
	alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
	 }
}
checkSavings();

function chooseOptExpenses() {
	for (i=1; i<=3; i++) {
	let questionOptExpenses = prompt("Статья необязательных расходов")
	appData.optionalExpenses[i] = questionOptExpenses;
	console.log(appData.optionalExpenses);
	}
}
chooseOptExpenses();
=======
for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
	    && a != '' && b != '' && a.length < 50)  {
	    console.log('Done!');
		appData.expenses[a] = b;
	}	else {
		console.log('Что-то пошло не так');
		i--;
	}
};

//let i = 0;
//while (i < 2) {
	//let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
	      //   b = prompt ("Во сколько обойдется?", "");
	    // if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
	    //    console.log ("done");
	      //   appData.expenses[a] = b;
	    // } else {
	     //     console.log ("bad result");
	     //     i--;
	    // }
	   //  i++;
//}

//let i = 0;
//do {
//	let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//	b = prompt ("Во сколько обойдется?", "");
//if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//   console.log ("done");
//	appData.expenses[a] = b;
//} else {
//	 console.log ("bad result");
//	 i--;
//}
//i++;
//} while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}
>>>>>>> master
