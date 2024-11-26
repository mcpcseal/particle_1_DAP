let system;
let systems = [];

let g;
let wind;

let repeller;

function setup() {
  createCanvas(720, 400);
  let pos = createVector(width/2, height/2);
  // systems.push(new ParticleSystem(pos));
  g = createVector(0, 0.05);
  wind = createVector(0.02, -0.02);
  
  repeller = new Repeller(0, height/2);
}

function draw() {
  background(51);

  for (let s of systems){
    s.addParticle();
    s.applyForce(g);
    s.applyForce(wind);
    s.applyRepeller(repeller);
    s.run();
  }

  repeller.position.x += 1;

  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY)
  let system = new ParticleSystem(mPos);
  systems.push(system);
}
