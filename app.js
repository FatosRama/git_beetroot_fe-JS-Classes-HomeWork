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

  get radius() {
    return this.radius;
  }

  set radius(value) {
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
  refill() {
    this.inkPercentage = 100;
    console.log(`Refilled! Ink now: ${this.inkPercentage}%!`);
  }
} 




// 3) Implement the Employee class that describes the employee and create an array of bank employees.

// Implement the EmpTable class to generate HTML code for a table with a list of bank employees. The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.

// Create an object of class EmpTable and display the result of the getHtml () method.

// Set up sass compilation via webpack.







