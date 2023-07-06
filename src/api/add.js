function add(a, b, c, d) {


    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number' && typeof(d) === 'number') {
      var total = a + b + c + d;  
      if (total === NaN)
      {return 'error'}
      return total 
    

}
  else {return 'error'}
}

module.exports = add;