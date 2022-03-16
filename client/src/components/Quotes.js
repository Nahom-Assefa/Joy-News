function Quotes () {
  const randomQuote = () => {
    const generatedNumber = Math.floor(Math.random() * 3);
    const quotes = ["It always seems impossible until it's done. - Nelson Mandela", 'Start where you are. Use what you have. Do what you can. - Arthur Ashe', "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk"];

    return quotes[generatedNumber];
  };

//   return <div>{randomQuote()}</div>;

  return (
    <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters">
    <h3><strong>Positive Quote of the Day</strong></h3>
    <p className="">{randomQuote()}</p>
  </div>
  )
};

export default Quotes;
