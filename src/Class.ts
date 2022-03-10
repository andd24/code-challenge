// I added a class interface and just copied the structure from the 
// customer and movie interfaces. I also copied the means of linking
// foreign keys and primary keys from the existing codebase ( it is shown
// how rentals call a movie id and i followed this pattern to have movies
// call a class). This  

export enum ClassId {
  C1 = "C1",
  C2 = "C2",
  C3 = "C3"
}

export interface Class {
    class: string;
    base_price: number;
    max_rental_days: number;
    late_multiplier: number;
  }
  
 