function analyzeGridStability(readings, debug=false){
    if (!Array.isArray(readings) || readings.length === 0) return null;

    let maxSum = readings[0];
    let currentSum = readings[0];
    let start = 0;
    let tmpStart = 0;
    let end = 0;

    if (debug) {
        console.log(`Begin Analysis`);
        console.log(`Starting value: readings[0] = ${readings[0]}`);
    }

    for (let i = 1; i < readings.length; i++){
        const reading = readings[i];

        if ( currentSum + reading < reading){
            currentSum = reading;
            tmpStart = i;

            if (debug) console.log(`[CAUTION] Reset at i=${i} → currentSum = ${reading}`);
            
        } else {
            currentSum += reading;
        }
        if (debug) console.log(`[TIME] Minute ${i}: sum = ${currentSum}`);

        if (currentSum > maxSum){
            maxSum = currentSum;
            start = tmpStart;
            end = i;
            if (debug) console.log(`[NEW] New max: ${maxSum} from ${start} to ${end}`);
            
        }
    }

  return {
    maxSurplus: maxSum,
    timeWindow: [start, end],
    segment: readings.slice(start, end + 1)
    };
}

const powerReadings = [-2, 3, 5, -1, 4, -6, 3, 2, 2, -9, 4, 6, -2, 4, -1, 2];

const report = analyzeGridStability(powerReadings, true);

console.log("\n GRID HEALTH REPORT ");
console.log(" Max Surplus:", report.maxSurplus, "kW");
console.log(" Time Window:", report.timeWindow);
console.log(" Segment:", report.segment);