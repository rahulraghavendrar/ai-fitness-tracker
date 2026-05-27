export function calculateCalories({
  gender,
  weight,
  height,
  age,
  goal,
}) {

  let bmr;

  if (gender === "male") {

    bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      5;

  } else {

    bmr =
      10 * weight +
      6.25 * height -
      5 * age -
      161;
  }

  let calories =
    bmr * 1.55;

  if (goal === "fat_loss") {
    calories -= 400;
  }

  if (goal === "muscle_gain") {
    calories += 300;
  }

  const protein =
    Math.round(weight * 2);

  const fats =
    Math.round(weight * 0.8);

  const carbs =
    Math.round(
      (calories -
        protein * 4 -
        fats * 9) / 4
    );

  return {
    calories:
      Math.round(calories),

    protein,
    carbs,
    fats,
  };
}