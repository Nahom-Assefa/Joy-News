export const gnewsTechnology = async () => {
  const data = await fetch(
    `https://gnews.io/api/v4/search?q=technology&token=${process.env.REACT_APP_GNEWSAPI}`
  );

  const jsonData = await data.json();

  return jsonData.articles;
};

export const gnewsScience = async () => {
  const data = await fetch(
    `https://gnews.io/api/v4/search?q=science&token=${process.env.REACT_APP_GNEWSAPI}`
  );

  const jsonData = await data.json();

  return jsonData.articles;
};

export const gnewsArticles = async () => {
  try {

    const tech = await fetch(
      `https://gnews.io/api/v4/search?q=science&token=${process.env.REACT_APP_GNEWSAPI}`
    );
    const jsonTech = await tech.json();
    const techArray = jsonTech.articles;

    const science = await fetch(
      `https://gnews.io/api/v4/search?q=technology&token=${process.env.REACT_APP_GNEWSAPI}`
    );
    const jsonScience = await science.json();
    const scienceArray = jsonScience.articles;
    const allArticles = techArray.concat(scienceArray);
    console.log("allArticles", allArticles);

    return allArticles;
  } catch (error) {
    console.log(error);
  }
};
