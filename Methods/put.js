putHandler = (req, res) => {
  res.write(
    JSON.stringify({
      message: "PUT Successful",
    })
  );
  res.end();
};

module.exports = putHandler;
