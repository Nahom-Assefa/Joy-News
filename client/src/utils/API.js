export const gnewsArticles = async () => {
  try {
    const filterArticles = (articles) => {
      const filteredArticles = articles.filter((articles) => {
        // return (!articles.title.includes("mask", 0)||!articles.title.includes("die", 0));
        return !articles.title.includes("die", 0);
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

    console.log("filteredArticles",filterArticles(allArticles));
    return filterArticles(allArticles);
  } catch (error) {
    console.log(error);
  }
};
