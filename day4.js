// Create a Polygon class that has the following properties:
//     A constructor that takes an array of integer values describing the lengths of the polygon's sides.
//     A perimeter() method that returns the polygon's perimeter.
//     Locked code in the editor tests the Polygon constructor and the perimeter method.
// Note: The perimeter method must be lowercase and spelled correctly.
// Input Format
//     There is no input for this challenge.
// Output Format
//     The perimeter method must return the polygon's perimeter using the side length array passed to the constructor.

class Polygon {
  constructor([...lengths]) {
    this.lengths = lengths;
  }
  perimeter() {
    let perim = 0;
    this.lengths.forEach((length) => {
      perim += length;
    });
    return perim;
  }
}