const schoolReport = (marks) => {
  let greenCounter = 0
  marksArray = marks.split(',');
  if(marks.length == 0) {
    return 'No results given.'
  } else if(marks == 'Green') {
    return "Green: 1"
  } else if(marks == 'Amber') {
    return "Amber: 1"
  } else if(marks == 'Red') {
    return "Red: 1"
  } else {
    console.log('test')
    marksArray.map((mark) => {
      if(mark == 'Green') {
        greenCounter++
      }
    })
    return `Green: ${greenCounter}`
  }




  
  
}

module.exports = schoolReport;