//  1) Implement a class that describes a circle. It must have the following components:

// a field that stores the radius of the circle;
// get-property that returns the radius of the circle;
// set-property that sets the radius of the circle;
// get-property that returns the diameter of the circle;
// a method that calculates the area of a circle;
// a method that calculates the length of the circle.
// Demonstrate the work of properties and methods.

 class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get getRadius() {
    return this.radius;
  }

  set setRadius(value) {
    this.radius = value;
  }

  get diameter() {
    return this.radius * 2;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculateLength() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(5);
console.log("Radius:", circle.getRadius);
console.log("Diameter:", circle.diameter);
console.log("Area:", circle.calculateArea());
console.log("Length:", circle.calculateLength());

circle.setRadius = 10;
console.log("\nAfter changing radius to 10:");
console.log("New radius:", circle.getRadius);
console.log("New diameter:", circle.diameter);
console.log("New area:", circle.calculateArea());
console.log("New circumference:", circle.calculateLength());

// 2) Implement a class that describes a stationery marker. It must have the following components:

// a field that stores the color of the marker;
// a field that stores the amount of ink in the marker (in percent);
// an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is 
// ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

// Demonstrate the work of the written methods.

class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage; 
  }

  print(text) {
    let output = "";
    let inkUsed = 0;

    for (let char of text) {
      
      if (this.inkPercentage <= 0) {
        output += "[ink empty]";
        break;
      }

      if (char !== " ") {
        inkUsed += 0.5;
      }

      if (inkUsed > this.inkPercentage) {
        output += "[ink empty]";
        this.inkPercentage = 0;
        break;
      }

      output += char;
    }
    
    return console.log(output);
  }
}

class RefillableMarker extends Marker {
  refill(amount) {
    this.inkPercentage = this.inkPercentage+amount > 100 ? 100 : this.inkPercentage+amount ;
    console.log(`Refilled! Ink now: ${this.inkPercentage}%!`);
  }
} 


let redMarker = new RefillableMarker("red", 100);
redMarker.print("This is a long text to test ink consumption testing... ....");

redMarker.refill(70);
redMarker.print("Now since I added more ink it will continue to type the text");

let greenMarker = new Marker("green", 3);
greenMarker.print("Very little ink...");
greenMarker.print("This text will be cut off because ink runs out");


// 3) Implement the Employee class that describes the employee and create an array of bank employees.

// Implement the EmpTable class to generate HTML code for a table with a list of bank employees. 
// The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.

// Create an object of class EmpTable and display the result of the getHtml () method.

// Set up sass compilation via webpack.


class Employee {
  constructor(name, position, salary, department) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.department = department;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = `<table border="1" style="font-family:sans-serif;">
      <thead>
        <tr style="border 1px solid black">
          <th style="padding:8px;">Name</th>
          <th style="padding:8px;">Position</th>
          <th style="padding:8px;">Salary</th>
          <th style="padding:8px;">Department</th>
        </tr>
      </thead>
      <tbody>`;

    for (const emp of this.employees) {
      html += `<tr>
        <td style="padding:8px;">${emp.name}</td>
        <td style="padding:8px;">${emp.position}</td>
        <td style="padding:8px;">$${emp.salary}</td>
        <td style="padding:8px;">${emp.department}</td>
      </tr>`;
    }

    html += `</tbody></table>`;
    return html;
  }
}


let bankEmployees = [
  new Employee("Bashkim Hashani", "Branch Manager", 85000, "Main Branch"),
  new Employee("Perparim Rama", "Loan Officer", 62000, "Credit Department"),
  new Employee("Ganimete Musliu", "Teller", 42000, "Customer Service"),
  new Employee("Blend Arifaj", "IT Specialist", 75000, "IT Department"),
  new Employee("Lis Malaj", "Financial Analyst", 70000, "Analytics"),
];

let table = new EmpTable(bankEmployees);

let body = document.querySelector('body');
body.innerHTML=table.getHtml();



