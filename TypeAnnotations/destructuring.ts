// ! Destructuring

const foreCast = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log("Today is " + date + "\nWeather is " + weather);
};

const person = {
  userName: "Virus",
  age: 12,
  others: {
    phoneNum: 8754734241,
  },
};

const { userName }: { userName: string } = person;
const {
  others: { phoneNum },
}: { others: { phoneNum: number } } = person;
