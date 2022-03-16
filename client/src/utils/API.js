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
          !articles.title.includes("Vaccine", 0) &&
          !articles.title.includes("vaccine", 0) &&
          !articles.title.includes("Vaccinating", 0) &&
          !articles.title.includes("vaccinating", 0) &&
          !articles.title.includes("deaths", 0) &&
          !articles.title.includes("interest", 0) &&
          !articles.title.includes("Interest", 0) &&
          !articles.title.includes(" Un ", 0) &&
          !articles.title.includes(" un ", 0) &&
          !articles.title.includes(" en ", 0) &&
          !articles.title.includes(" En ", 0) &&
          !articles.title.includes(" que ", 0) &&
          !articles.title.includes(" Que ", 0) &&
          !articles.title.includes(" dies ", 0) &&
          !articles.title.includes(" avec ", 0) &&
          !articles.title.includes(" Avec ", 0) &&
          !articles.title.includes(" Les ", 0) &&
          !articles.title.includes(" les ", 0) &&
          !articles.title.includes(" de ", 0) &&
          !articles.title.includes(" De ", 0) &&
          !articles.title.includes(" die", 0)
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
