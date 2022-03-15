export const gnewsArticles = async () => {
  try {
    const filterArticles = (articles) => {
      const filteredArticles = articles.filter((articles) => {
        return (
          !articles.title.includes("Invasion", 0) &&
          !articles.title.includes("invasion", 0) &&
          !articles.title.includes("war", 0) &&
          !articles.title.includes("War", 0) &&
          !articles.title.includes("Ukraine", 0) &&
          !articles.title.includes("Russia", 0) &&
          !articles.title.includes("Russian", 0) &&
          !articles.title.includes("mask", 0) &&
          !articles.title.includes("Covid", 0) &&
          !articles.title.includes("Covid-19", 0) &&
          !articles.title.includes("Coronavirus", 0) &&
          !articles.title.includes("Pandemic", 0) &&
          !articles.title.includes("pandemic", 0) &&
          !articles.title.includes("deaths", 0) &&
          !articles.title.includes("die", 0)
        );
      });
      return filteredArticles;
    };

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

    console.log("filteredArticles", filterArticles(allArticles));
    return filterArticles(allArticles);
  } catch (error) {
    console.log(error);
  }
};
