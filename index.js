function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42); // HQ is on 42nd Street
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264; // Each block is 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return "cannot travel that far"; 
  }
}
