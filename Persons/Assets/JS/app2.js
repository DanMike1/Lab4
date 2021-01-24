// Declaring Object
// Remove the variables and modify with the object 
let person = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligible: false,
    familyMembers: new Array,
    weight: "",
    height: "",
    ageCalc: function () {
        return this.age = new Date().getFullYear() - this.birthYear;
    },
    checkVote: function () {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) {
            this.isEligible = true;
        } else {
            this.isEligible = false;
        }
    },
    calcBmi: function () {

        let bmi = this.weight / (this.height * this.height);


        bmi = Number(bmi);

        console.log("Your Bmi is : " + bmi);
        if (bmi >= 30.0)
            console.log("Your are : Obese");

        else if (bmi >= 18.5 && bmi <= 24.9)
            console.log("Your are : Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            console.log("Your are : Overweight");
        else if (bmi >= 30.0)
            console.log("Your are : Obese");
       else if (bmi < 18.5)
            console.log("Your are : Underweight");


    }

};


// Receive the values from input and assign to object properties
person.firstName = prompt("Enter Your First Name");
person.lastName = prompt("Enter Your Last Name");
person.job = prompt("What is Your Profession ?");
person.birthYear = prompt("Enter Your Birth Date");
person.weight = prompt("Your Weight in Kg  ? ");
person.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    person.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}


// call age and check vote fun
person.ageCalc();
person.checkVote();

// Adding Self Invoking Function Expression 

(function () {


    console.log("Welcome to the console log of your profile")
    console.log("Here is your Profile ")
    console.log("Full Name: " + person.firstName + " " + person.lastName);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.age + " " + "years old");
    console.log("Eligibility to Vote (True or False) : " + person.isEligible);

    console.log("Family Members ");

    //Displaying the family member with foreach
    person.familyMembers.forEach(function (member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call bmi calculator 
    person.calcBmi();


})();