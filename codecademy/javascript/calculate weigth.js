const calculateWeight = (earthWeight, planet) => {
    if (isNaN(earthWeight)) {
      return 'earthWeight is not a number. Please enter a number';
    } 
    if (!isNaN(planet)) {
        return 'planet is not a string. Please enter a string';
    } 
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
            break;
        case 'Venus':
            return earthWeight * 0.907;
            break;
        case 'Mars':
            return earthWeight * 0.377;
            break;
        case 'Jupiter':
            return earthWeight * 2.36;
            break;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid planet entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
            break;
    }
}
  console.log(calculateWeight('90', 'Mars'));