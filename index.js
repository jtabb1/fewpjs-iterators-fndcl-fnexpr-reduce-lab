const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// More Readable Version 02
let totalBatteries = batteryBatches.reduce( (sum, element) => 
    sum + element);

// // Version 01
// let totalBatteries = batteryBatches.reduce( (r,et) => r + et, 0 );
