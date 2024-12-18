class Repeller {

  constructor(x, y)  {
    // A Repeller doesn’t move, so you just need position.
    this.position = createVector(x, y);
    // Instead of mass, use the concept of power to scale the repellent force.
    this.power = 150;
  }

  show() {
    stroke(0);
    fill(127);
    circle(this.position.x, this.position.y, 32);
  }

  // All the same steps to calculate an attractive force, only pointing in the opposite direction
  repel(particle) {
    // Step 1: Get the force direction.
    let force = p5.Vector.sub(this.position, particle.position);
    // Step 2: Get and constrain the distance.
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    // Step 3: Calculate the magnitude, using a power variable for G.
    let strength = -1 * this.power / (distance * distance);
    // Step 4: Make a vector out of the direction and magnitude.
    force.setMag(strength);
    return force;
  }
}