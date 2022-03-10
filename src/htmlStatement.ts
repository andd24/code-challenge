
export const htmlStatement = (customer: any, movies: any, classes: any): string => {
  let totalAmount = 0;
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n<ul>\n`;
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

    result += `\t<li>${movie.title} - ${subtotal}</li>\n`;
    totalAmount += subtotal;
  }
  customer.points += points_to_add
  result += `</ul>\n<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${points_to_add}</em> frequent renter points</p>\n`;
  result += `<p>Your new frequent renter points total is <em>${customer.points}</em>!</p>`

  return result;
};