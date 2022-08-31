function plusMinus(arr) {
    // Write your code here
    let positiveSum = 0;
    let negativeSum = 0;
    let zeroSum = 0;

    if (arr.length > 0 || arr.length < 100) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > -100 || arr[i] < 100) {

                arr[i] > 0 ? positiveSum += 1 :
                    ((arr[i] < 0) ? negativeSum += 1 : zeroSum += 1)
            }
        }
    }
    console.log((positiveSum / arr.length).toFixed(6))
    console.log((negativeSum / arr.length).toFixed(6))
    console.log((zeroSum / arr.length).toFixed(6))
}
