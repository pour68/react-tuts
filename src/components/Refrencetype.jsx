const Refrencetype = () => {
  // variable: refrence type
  const movie = {
    id: 1,
    title: "titanic",
    genre: "drama, romance",
    director: "james cameron",
  };

  const { id, title, genre, director } = movie;

  const names = ["pouria nayeb", "aria zamani", "aria khodarahmi"];

  const displayZeroOrCount = (count) => (count === 0 ? "Zero" : count);

  const toFahrenheit = (tempratue) => tempratue * 1.8 + 32;

  return (
    <div className="container">
      <div>
        {id} {title} {genre} &nbsp;
        {director}
      </div>

      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <main>
        {displayZeroOrCount(10)} <br />
        {toFahrenheit(25)}
      </main>
    </div>
  );
};

export default Refrencetype;
