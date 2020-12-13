var mouseDiff, hit1, hit2, hit3 = false;
const randomPoly2 = [];
const randomPoly3 = [];
const randomPoly4 = [];

function setup() {
    createCanvas(document.body.offsetWidth, window.innerHeight);
    collideDebug(true); // enable debug mode

    newDiff1 = createVector();
    newDiff2 = createVector();
    newDiff3 = createVector();

    // Generate 3 random polygons:

    for (var a = 0; a < 360; a += random(30, 90)) {
        const t = radians(a);
        const x = cos(t) * random(60, 120);
        const y = sin(t) * random(60, 120);
        randomPoly2.push(createVector(x, y));
    }

    for (var a = 0; a < 360; a += random(30, 90)) {
        const t = radians(a);
        const x = cos(t) * random(60, 120);
        const y = sin(t) * random(60, 120);
        randomPoly3.push(createVector(x, y));
    }

    for (var a = 0; a < 360; a += random(30, 90)) {
        const t = radians(a);
        const x = cos(t) * random(60, 120);
        const y = sin(t) * random(60, 120);
        randomPoly4.push(createVector(x, y));
    }
}

function draw() {
    background(200);

    stroke(0,255,0);
    strokeWeight(1);
    fill(255);
    newDiff1.set(500, 300).sub(randomPoly2[0]);
    for (const vec of randomPoly2)  vec.add(newDiff1);
    beginShape();
    for (const { x, y } of randomPoly2)  vertex(x, y);
    endShape(CLOSE);

    stroke(0,0, 255);
    strokeWeight(1);
    fill(255);
    newDiff2.set(750, 300).sub(randomPoly3[0]);
    for (const vec of randomPoly3)  vec.add(newDiff2);
    beginShape();
    for (const { x, y } of randomPoly3)  vertex(x, y);
    endShape(CLOSE);

    stroke(255,0,0);
    strokeWeight(1);
    fill(255);
    newDiff3.set(1000, 300).sub(randomPoly4[0]);
    for (const vec of randomPoly4)  vec.add(newDiff3);
    beginShape();
    for (const { x, y } of randomPoly4)  vertex(x, y);
    endShape(CLOSE);

    stroke(0);
    fill(255);
    rect(mouseX, mouseY, 8, 8)

    hit1 = collideRectPoly(mouseX, mouseY, 8, 8, randomPoly2, true);
    hit2 = collideRectPoly(mouseX, mouseY, 8, 8, randomPoly3, true);
    hit3 = collideRectPoly(mouseX, mouseY, 8, 8, randomPoly4, true);

    if(hit1){
      stroke(0);
      strokeWeight(2);
      newDiff1.set(500, 300).sub(randomPoly2[0]);
      for (const vec of randomPoly2)  vec.add(newDiff1);
      beginShape();
      for (const { x, y } of randomPoly2)  vertex(x, y);
      endShape(CLOSE);

      stroke(255, 153, 0);
      fill(255, 153, 0);
      circle(mouseX, mouseY, 10);
    }
    else if(hit2){
      stroke(0);
      strokeWeight(2);
      newDiff2.set(750, 300).sub(randomPoly3[0]);
      for (const vec of randomPoly3)  vec.add(newDiff2);
      beginShape();
      for (const { x, y } of randomPoly3)  vertex(x, y);
      endShape(CLOSE);

      stroke(255, 153, 0);
      fill(255, 153, 0);
      circle(mouseX, mouseY, 10);
    }
    else if(hit3){
      stroke(0);
      strokeWeight(2);
      newDiff3.set(1000, 300).sub(randomPoly4[0]);
      for (const vec of randomPoly4)  vec.add(newDiff3);
      beginShape();
      for (const { x, y } of randomPoly4)  vertex(x, y);
      endShape(CLOSE);

      stroke(255, 153, 0);
      fill(255, 153, 0);
      circle(mouseX, mouseY, 10);
    }
    else{
      stroke(color('black'));
      strokeWeight(1);
    }
}
