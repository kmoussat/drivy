'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];





//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];


//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


// Exercice 1 - Euro-Kilometer
// Price for each driver


// Retrieve and calculate the date 
function DateRetrieval(pickup, back)
{
	
	var datePickup = new Date(pickup); //convert the pickup date to a date format
	var pick = datePickup.getDate(); //retrieve the day of the date
	var dateReturn = new Date(back); //convert the return date to a date format
 	var ret = dateReturn.getDate(); 

	return (ret - pick) + 1;
}

for(var i = 0; i < rentals.length;i++) //runs through rentals elements
{
	var time = 0;
	var distance = 0;
	var retDate = 0;
	var amount = 0;
	var deductibleReduction = 0;

	
	for(var k = 0; k <cars.length;k++) //runs through cars elements
	{
		if(rentals[i].carId == cars[k].id)
		{
			
			retDate = DateRetrieval(rentals[i].pickupDate, rentals[i].returnDate);  //retrieve the days the car has been rented
			
			distance = cars[k].pricePerKm * rentals[i].distance;  // distance & price
			
			//
			time = cars[k].pricePerDay*retDate; // time the car has been rented 
			rentals[i].price = distance+time; // rental price
			
			console.log("Rental Price : " + rentals[i].price); //rental price console log

			
			
			//Exercice 2
			//Decreasing Price
			
			if(retDate > 1) 
			{
			time = (cars[k].pricePerDay - cars[i].pricePerDay*0.1)*(DateRetrieval(rentals[i].pickupDate, rentals[i].returnDate)); // 10% after 1 day

			if(retDate > 4)
			{
			time = (cars[k].pricePerDay - cars[i].pricePerDay*0.3)*(DateRetrieval(rentals[i].pickupDate, rentals[i].returnDate)); // 30% after 4 days
			}
			
			if(retDate > 10)
			{
			time = (cars[k].pricePerDay - cars[i].pricePerDay*0.5)*(DateRetrieval(rentals[i].pickupDate, rentals[i].returnDate)); // 50% after 10 days
			}
			}
			else
			{
				time = cars[k].pricePerDay*(DateRetrieval(rentals[i].pickupDate, rentals[i].returnDate));
			}
			rentals[i].price = distance+time;
			
			console.log("New Rental Price : " + rentals[i].price);
			
			
			// Exercice 3 
			
			// Give me all your money
			
			rentals[i].commission.assistance = retDate;  // road assistance -> 1€ per day
			amount = rentals[i].price - rentals[i].commission.assistance;  // commission amount
			rentals[i].commission.drivy = amount*0.3; // 30% of the rental price - drivy commission
			rentals[i].commission.insurance =  (rentals[i].commission.drivy / 2); // insurance -> half of the commission
			
			console.log("Amount : " + amount);
			console.log("Assistance commission : " + rentals[i].commission.assistance);
		    console.log("Insurance commission : " + rentals[i].commission.insurance);
			console.log("Drivy commission : " + rentals[i].commission.drivy);	
				
		
			
			
			//Exercice 4
			
			// The famous deductible
			
			
			if(rentals[i].options.deductibleReduction == true)
			{		
				deductibleReduction = retDate*4;  // The driver is charged an additional 4€/day when he chooses the "deductible deductibleReduction" option.
				rentals[i].price = rentals[i].price + deductibleReduction;
				amount = rentals[i].price - rentals[i].commission.assistance; 
				rentals[i].commission.drivy = amount*0.3 + retDate; // deductible deductibleReduction charge falls to drivy
				
				console.log("Drivy commission after deductible reduction : " + rentals[i].commission.drivy);
			}
			else
			{
				console.log("The driver did not take the deductible reduction system");
			}
				
				
				//Exercice 5
				
				// Pay the actors
				
				for (var l = 0; l < actors.length; l++) //runs through the actors elements
			{
				if(actors[l].rentalId == rentals[i].id)
				{
					for(var m =0; m < actors[l].payment.length; m++) //runs through the actors.payment elements
					{
						switch(actors[l].payment[m].who)
						{
							case "driver":
								actors[l].payment[m].amount = rentals[i].price; //the driver must pay the rental price and the (optional) deductible deductibleReduction
								console.log("The driver owes : " + actors[l].payment[m].amount);
							break;
							
							case "owner":
								actors[l].payment[m].amount = rentals[i].price - rentals[i].commission.drivy; //the owner receives the rental price minus the commission
								console.log("The owner is paid : " + actors[l].payment[m].amount);
							break;
							
							case "insurance":
								actors[l].payment[m].amount = rentals[i].commission.insurance; //the insurance receives its part of the commission
							    console.log("The insurance receives : " + actors[l].payment[m].amount);
							break;
							
							case "assistance":
								actors[l].payment[m].amount = rentals[i].commission.assistance; //the assistance receives its part of the commission
								console.log("The assistance receives : " + actors[l].payment[m].amount);
							break;
							
							case "drivy":
								actors[l].payment[m].amount = rentals[i].commission.drivy + deductibleReduction ; //drivy receives its part of the commission, plus the deductible deductibleReduction
								console.log("Drivy receives : " + actors[l].payment[m].amount);
							break;

						}

					}
				}
			}
			
			console.log("==================");
			
				//Exercice 6
				
				// Rental Modifications 
				
			for(var p=0; p<rentalModifications.length; p++)
			{
				if(rentalModifications[p].rentalId == rentals[i].id)
				{
					if(rentalModifications[p].pickupDate != null) //check if the pickup date exists
					{
						rentals[i].pickupDate = rentalModifications[p].pickupDate; // set & change the  new pickup date
						console.log("New pick up date : " + rentals[i].pickupDate);					
					}
					if(rentalModifications[p].rentalId != null) //check if the return date exists
					{
						rentals[i].returnDate = rentalModifications[p].returnDate; // set & change the new return date
						console.log("New return date : " + rentals[i].returnDate);
					}
					if(rentalModifications[p].distance != null) //check if the distance exists
					{
						rentals[i].distance = rentalModifications[p].distance; //set the new distance
						console.log("New distance : " + rentals[i].distance);
					}
					else
					{
						console.log("No changes");
					}
						
				}				
			}
			
		}
				
			
		
	}
}






console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);