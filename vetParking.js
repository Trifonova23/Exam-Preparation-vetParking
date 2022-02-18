function vetParking(input) {
  let days = Number(input[0]);
  let hoursPerDay = Number(input[1]);
  let totalSumForParking = 0;
  let sumPerDay = 0;

  for (let currentDay = 1; currentDay <= days; currentDay++) {
    //правим брояч за дните
    for (let currentHours = 1; currentHours <= hoursPerDay; currentHours++) {
      //брояч за часове
      if (currentDay % 2 === 0 && currentHours % 2 !== 0) {
        // за всеки четен ден и нечетен час
        totalSumForParking += 2.5;
        sumPerDay += 2.5;
      } else if (currentDay % 2 !== 0 && currentHours % 2 === 0) {
        totalSumForParking += 1.25;
        sumPerDay += 1.25;
      } else {
        totalSumForParking++;
        sumPerDay++;
      }
      console.log(`Day: ${currentDay} - ${sumPerDay.toFixed(2)} leva`);
      //   sumPerDay = 0;
    }
  }
}
vetParking(["2", "3"]);
