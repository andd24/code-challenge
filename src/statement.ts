// for this I created a new table in the da

export const statement = (customer: any, movies: any, classes: any): string => {
  let totalAmount = 0;
  let result = `Rental Record for ${customer.name}\n`;
  let points_to_add = 0
  
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let genre = classes[movie.classID];
    let price = genre.base_price
    let days = genre.max_rental_days
    let multiplier = genre.late_multiplier
    let subtotal = 0
       
    if (genre.class != "new") {
      subtotal = price 
      if (r.days > days) {
        subtotal += (r.days - days) * multiplier;
      }
    }
    else {
      subtotal += r.days * 3
      if (r.days > 2){
        points_to_add++
      }
    }
    
    points_to_add++;
    result += `\t${movie.title}\t${subtotal}\n`;
    totalAmount += subtotal;
  }
  customer.points += points_to_add
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${points_to_add} frequent renter points\n`;
  result += `Your new frequent renter points total is ${customer.points}`
  
  return result;
};
