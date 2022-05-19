//TODO: Retornar todas as datas de sexta feira 13 num intervalo de anos

function fridayTheThirteenths(start, end) {
  date = new Date(start, 0, 13)
  endDate = new Date(end ? end : start, 11, 13)

  dates = []
  
  while(date <= endDate) {

      isFridayThirteen = isFriday(date) 

      if(isFridayThirteen) {
          dateText = (date.getMonth() + 1) +  '/' +  date.getDate()  + '/' + date.getFullYear()

          dates = [...dates, dateText]

      }

      newMonth = date.getMonth() <= 12 ? date.getMonth() + 1 : 1
      newYear = newMonth <= 12 ? date.getFullYear() : date.getFullYear() + 1

      date = new Date(newYear, newMonth, 13)
  }

  return dates.join(" ")

}

isFriday = (date) =>  date.getDay() == 5
  
Test.assertEquals(fridayTheThirteenths(1999, 2000), "8/13/1999 10/13/2000");
Test.assertEquals(fridayTheThirteenths(2000), "10/13/2000");
