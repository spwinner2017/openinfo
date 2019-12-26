let expression
switch (expression) {
  case 'add': (x, y) => {
    return x + y;
  }
    break
  case 'sub':
    break;
  case 'mul': (x, y) => {
    return x * y;
  }
    break;
  case 'div': (x, y) => {
    return x / y;
  }
    break
  default:
    // execute default statement  
    break;
}
