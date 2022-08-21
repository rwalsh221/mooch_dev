console.log('hello world');

const stravaAuth = '56b6cbd5597158d65571263e05654a19c89c234d';

const getAthlete = async () => {
  try {
    const athlete = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${stravaAuth}`
      //   {
      //     method: 'POST',
      //     body: {
      //       Authorization: '56b6cbd5597158d65571263e05654a19c89c234d',
      //     },
      //   }
    );

    const athleteJson = await athlete.json();

    console.log(athleteJson);
  } catch (error) {
    console.error(error);
  }
};

getAthlete();
