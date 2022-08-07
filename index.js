// Code your solution in this file!
// describe('index.js', function() {
//     describe('distanceFromHqInBlocks()', function() {

    // it('returns a distance in blocks', function() {
    //     expect(distanceFromHqInBlocks(43)).to.equal(1);
    //   });
  
    // it('returns a distance in blocks', function() {
    //     expect(distanceFromHqInBlocks(50)).to.equal(8);
    //   });

    // it('calculates distances below 42nd street', function() {
    //     expect(distanceFromHqInBlocks(34)).to.equal(8);
    //   });
    // });

    // describe('distanceFromHqInFeet()', function() {
    //     it('returns a distance in feet', function() {
    //       expect(distanceFromHqInFeet(43)).to.equal(264);
    //     });

    // it('returns a distance in feet', function() {
    //     expect(distanceFromHqInFeet(50)).to.equal(2112);
    //   });
  
    //   it('calculates distances below 42nd street', function() {
    //     expect(distanceFromHqInFeet(34)).to.equal(2112);
    //   });
    // });

    // describe('distanceTravelledInFeet()', function() {
    //     it('returns the distance travelled in feet', function() {
    //       expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    //     });
    
    //     it('returns a distance in feet', function() {
    //       expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    //     });
    
    //     it('returns distance when destination is below distance', function() {
    //       expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    //     });
    //   });

    // describe('calculatesFarePrice(start, destination)', function() {
    //     it('gives customers a free sample', function() {
    //       expect(calculatesFarePrice(43, 44)).to.equal(0);
    //     });
    
    //     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
    //       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    //       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    //     });
    
    //     it('charges 25 dollars for a distance over 2000 feet', function() {
    //       expect(calculatesFarePrice(50, 58)).to.equal(25);
    //     });
    
    //     it('does not allow rides over 2500 feet', function() {
    //       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    //     });
    //   });
    // });

const HQ= 42

function distanceFromHqInBlocks (block) {
if (block > HQ) {
    return (block - HQ);
} else if (block < HQ) {
    return (HQ- block);
}
} 
//The aim is to try to figure out the distance in blocks from HQ
// HQ is on 42nd Street and for the first problem we need to have the block equal to 1.
// If you look at the code (distanceFromHqInBlocks(43) the parameter has already been defined as 43, so how do we get code to give us a return value of 1 block from HQ?
//If the block (43 in this example) is a higher number than HQ (42) then the (block > HQ) applies the formula 43-42 to give us a return value of 1 block.


function distanceFromHqInFeet (feet) {
return distanceFromHqInBlocks(feet)*264;
}
//Each block is 264 feet so to get a result of 264 if the parameter is 43 we reuse the distanceFromHqInBlocks Function to get the block value
//Once we have the block value from the previous function as 43-42 is 1 * 264 gives a value of 264.
//Same also applies to (distanceFromHqInFeet(50)).to.equal(2112); the (50) is subtracted by HQ(42) in the first function and gives value of 8.
//The 8 is then multipled by 264 in the second function function distanceFromHqInFeet (feet)to give a value of 2112.

function distanceTravelledInFeet(startTrip, endTrip) {
    if (startTrip < endTrip) {
        return (endTrip - startTrip)*264;
    } else if (startTrip > endTrip) {
        return (startTrip - endTrip)* 264;
    }
}
//The purpose of this code is to get the total distance travelled in feet from the two paramters provided.
//Lets use the first example  expect(distanceTravelledInFeet(43, 48)).to.equal(1320);.
//We first labelled 43 as the startTrip as this is where we will be picked up from and 48 as endTrip as this is where we are being dropped off.
//As you can see the argument(value) of the startTrip is 43 which is LESS than the value of the endTrip 48. If we were to do startTrip-Endtrip we would get a negative value.
//Hence we do if the value of startTrip LESS than endTrip , perform calculation endTrip - starttrip to give us a result of 5 blocks, then to get the feet we multiply is by 264 to get 1320 feet.


function calculatesFarePrice(start, end) {
    let feet=distanceTravelledInFeet(start,end);
    if (feet <= 400) {
        return 0;

    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * 0.02;
    }

    if (feet > 2000 && feet < 2500 ) {
        return 25;
    } 
    else if (feet > 2500) {
        return 'cannot travel that far'
    }

}
//For this line of code , we need to calculate the feet in order to know the appropriate fare price to charge.
//In this case we first have to get the function that calculates FEET in this case distanceTravelledInFeet is the function that converts block to feet.
//Once we have the function we can add a variable 'FEET' and assign it a value (which in our case is feet which is given by the function) we can assign varaible to functions as well.
//Once the FEET variable has been defined using a function that calculates feet we can tackle the problem.
//The first 400 feet are free. In this case feet = 44-43 (refer to the functions code if start < end do end- start in this case 44-43 mutliplied by 264) however as its under 400 feet we just assign a value of 0.
//In the second line of code the feet= (34-32) * 264 = 528 - 400(first 400 feet is free) = 128 feet *0.02 cents = 2.56.



























  
// const HQ= 42

//     function distanceFromHqInBlocks(blocks){
// if (blocks > HQ) {
//     return blocks - HQ;
// } else if (HQ < blocks);
// return HQ - blocks;

// } //Gives you the difference between values in blocks


// function distanceFromHqInFeet(feet){
//     return distanceFromHqInBlocks(feet)*264;
// } //Gives you the difference between blocks * 264 per block to give you feet
// //important to note that the parameter has been defined in expect(distanceFromHqInFeet(50)) which is 50 in example.


// function distanceTravelledInFeet (pickUp, dropoff) {
// if (pickUp > dropoff) {
//     return (pickUp - dropoff) * 264;
// } 
// else if (dropoff > pickUp) {
//     return (dropoff - pickUp) * 264;
// }
// } 
// //Gives you the total feet travelled from block to block. 
// //expect(distanceTravelledInFeet(43, 48)).to.equal(1320);Since the dropoff is (48) is greater than the pickup (43).
// // The second line of code applies (dropoff-pickup)* 264 = gives total travel of 1,320. 

// function calculatesFarePrice(start, end) {
//     const feet=distanceTravelledInFeet(start,end);
//     if (feet <= 400) {
//         return 0;

    // } else if (feet > 400 && feet < 2000) {
    //     return (feet - 400) * 0.02;
    // }

//     if (feet > 2000 && feet < 2500 ) {
//         return 25;
//     } 
//     else if (feet > 2500) {
//         return 'cannot travel that far'
//     }

// }





