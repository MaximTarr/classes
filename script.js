// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.ru"){
//     return {
//         fullName: newFullName,
//         age: newAge,
//         email: newEmail
//     }
// }

// function showName(obj){
//     console.log(obj.fullName.split(' ')[1]);
// }

// let person2 = createPerson();
// showName(person2);


// let user = {
// 	login: "Tarrasque",
// 	passwords: ["asd123", "qwerty"],
// 	location: {
// 		city: "Almaty",
// 		street: "Navoi",
// 	},
// 	loginFunc: function(){
// 		console.log(`${this.login} logged in`)
// 	}
// }

// user.loginFunc()

////////////////////////////////////////////////////////////////

// let obj1 = {x: 10}
// let obj2 = {x: 7}

// function func(a, b){
// 	console.log(this.x + a + b)
// }

// func.call(obj1, 5, 2)
// let newFunc = func.bind(obj1, 5, 2)
// newFunc()

//////////////////////////////////////////////////////////////////////

// function User(name, age, email){
// 	this.name = name
// 	this.age = age
// 	this.email = email
// }

// let u = new User("Tarrasque", 999, "asd123@mail.ru")

// console.log(u.name)

//////////////////////////////////////////////////////////////////////


// class User{
// 	constructor(name, age){
// 		this.name = name
// 		this.age = age
// 	}

// 	loginFunc(){
// 		console.log(`${this.name} logged in`)
// 	}
// }

// let u = new User("Tarrasque", 16)
// u.loginFunc()


//////////////////////////////////////////////////////////////////////


class CounterControl{
	constructor(startValue, plusBtn, minusBtn){
		this.counterValue = startValue
		this.plusBtn = plusBtn
		this.minusBtn = minusBtn


	plusBtn.addEventListener("click", () => {
		this.increase()
		this.drawValue()
	})

	minusBtn.addEventListener("click", () => {
		this.decrease()
		this.drawValue()
	})
	}








	drawValue(){
		let span = document.querySelector("#counter")
		span.innerHTML = this.counterValue
	}

	increase(){
		this.counterValue++
	}
	decrease(){
		this.counterValue--
	}
}
 



let cc = new CounterControl(0, document.querySelector("#plusBtn"), document.querySelector("#minusBtn"))