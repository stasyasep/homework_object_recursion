// Створіть об'єкт з інформацією про себе: ім'я, прізвище, кількість копійок в кишені).

let Natasha = {

	"ім'я" : 'Natalia',
	"прізвище" : 'Stasishina',
	'кількість копійок в кишені' : 50

};


// Добавте властивість "дата народження" (кирилицею) в форматі дд.мм.рррр

Natasha["дата народження"] = '09.09.1990';

// Добавте властивість age2033, в яку запишіть число, розрахувавши скільки вам буде років у 2033 році.

let age = Natasha["дата народження"].split('.');

Natasha.age2033 = 2033-(+age[2]);

// Добавте циклом властивості про ваш вік у 2010-2020 роках.

for(let i = 2010; i<=2020; i++){

	Natasha['age'+i] = i - +age[2];
}


// Переберіть циклом всі властивості та виведіть їх в консоль у вигляді:
// 0 name Бобир
// 1 fname Олександр
// 2 coins 75
// 3 дата народження 05.10.1982
// ...

let i = 0;
for (key in Natasha) {
	console.log(i + ' '+key +' '+ Natasha[key]);
	i++;	
}

// Видаліть властивість про вміст кишені.

delete Natasha["кількість копійок в кишені"];

// Скопіюйте об'єкт з інформацією про себе, всі строкові значення продублюйте ("Бобир" --> "БобирБобир"), а числові - помножте на два (75 --> 150); виведіть обидва об'єкта.

let copy = {};

for (key in Natasha) {
	copy[key] = Natasha[key]+Natasha[key];
}

console.log(Natasha);
console.log(copy);

// Створіть функцію розрахунку об'єму коробки яка приймає один аргумент 
// у вигляді об'єкта. Функція повинна повертати два числових значення: в кубічних сантиметрах та літрах (см3 та дм3);

(function task(){

	let parametr = {

		'довжина': 25,
		'ширина': 20,
		'висота': 30
	};

	function value(obj){

		let a = 1;

		for(let key in obj){

			a*=obj[key];
		}

		let result = {};
		result['см3']=a;
		result['дм3']=a*0.001;

		return result;
	}

	console.log(value(parametr));

})();


// Створіть функцію, що повертає об'єкти про користувачів, зчитуючи їх з форми: login, e-mail, phone, role (admin, moderator, user, viewer);
// створіть масив з 5 користувачів та виведіть його в консоль.

(function task(){

let users = [];
let i = 0;

document.getElementById("form").onsubmit = function(even){

	event.preventDefault();

	let login = document.getElementById('login').value;
	let mail = document.getElementById('mail').value;
	let phone = document.getElementById('phone').value;
	let role = document.getElementById('role').value;

	users[i] = {};
	users[i].login = login,
	users[i].mail = mail,
	users[i].phone = phone,
	users[i].role = role

	i++;
}
console.log(users);

})();

// Локалізацію деяких елементів веб-сторінки покладено на фронтенд.
// Наразі сайт має базову українську мову та дві локалізації - англійську та російську.
// Бекенд добавляє у тег body атрибут data-lang зі значенням en або ru.
// Технічне завдання: Зробіть скриптом локалізацію на англійську мову. HTML-код:
// table { width: 400px; border-collapse: collapse;}
// th, td { padding: 8px; border: 1px solid silver;}
// th { text-align: left;}
// th,	.total { font-size: 120%; line-height: 1.3em; font-weight: bold;}
// th:nth-child(3),
// td:nth-child(3),
// .total td:nth-child(2) { text-align: right;}

// <h2><span>Корзина</span></h2>
// <table>
//   <tr>
//     <th><span>Товар</span></th>
//     <th><span>Кількість</span></th>
//     <th><span>Ціна</span></th>
//   </tr>
//   <tr>
//     <td><strong>Adapter 220/12 euro</strong>:</td>
//     <td>2 <span>шт.</span></td>
//     <td><em>40 <span>грн.</span></td>
//   </tr>
//   <tr>
//     <td><strong>Cable 5A</strong>:</td>
//     <td>7 <span>м.</span></td>
//     <td><em>8 <span>грн.</span></td>
//   </tr>
//   <tr>
//     <td><strong>Socket 2x 16A white</strong>:</td>
//     <td>1 <span>шт.</span></td>
//     <td><em>40 <span>грн.</span></td>
//   </tr>
//   <tr class="total">
//     <td colspan="2">Загальна сума:</td>
//     <td><em>320 <span>грн.</span></em></td>
//   </tr>
// </table>
// Вказівки до виконання:
// В першу чергу складіть алгоритм.
// Оскільки є дві мови - потрібно створити два словника.
// Щоб дізнатися яку мову встановив бекенд - задайте потрібний атрибут та дослідіть вміст елемента document.body.



(function task(){

	let en = {
		'Корзина': 'Basket',
		'Товар': 'Goods',
		'Кількість': 'Number',
		'Ціна': 'Price',
		'шт.': 'pcs',
		'грн.': 'UAH',
		'м.': 'm',
		'Загальна сума:': 'Total :'
	};
	let ru = {
		'Корзина': 'Корзина',
		'Кількість': 'Количество',
		'Ціна': 'Цена',
		'Загальна сума:': 'Общая сума :',
		'шт.': 'шт.',
		'грн.': 'грн.',
		'м.': 'м.',
		'Товар': 'Товар'
	};

	let span = document.getElementsByTagName('span');
	let len = document.body.getAttribute("data-lang");


	if(len ==="ru"){

		for (let i = 0; i < span.length; i++){
			span[i].innerText = ru[span[i].innerText];
		}
	}
	if(len ==="en"){

		for (let i = 0; i < span.length; i++){
			span[i].innerText = en[span[i].innerText];
		}
	}

})();

// Виведіть рекурсією цифри від Z до A в консоль (використовуйте коди символів).

(function recursion(){

	function recur(a){

		console.log(String.fromCharCode(a));

		if (a > 65){
			recur(a-1);
		}
	}

	recur(90);

})();

