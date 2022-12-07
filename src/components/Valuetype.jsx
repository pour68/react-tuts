const Valuetype = () => {
  // variable: value types
  const statment = "aria is frontend master!";
  const age = 25;
  const isMale = true;
  const hasBrother = null;
  const birthdate = new Date(2001, 10, 5).toLocaleDateString("fa-IR");
  const localSymbol = Symbol("aria-id");
  const globalSymbol = Symbol.for("id");
  const key = undefined;

  return (
    <div className="container">
      {statment} <br />
      {age} <br />
      {isMale ? "Male" : "Female"} <br />
      {hasBrother ?? "aria do not have any brother"} <br />
      {birthdate} <br />
    </div>
  );
};

export default Valuetype;
