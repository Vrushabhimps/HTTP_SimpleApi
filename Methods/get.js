getHandler = (req, res) => {
  res.write(
    JSON.stringify({
      message: "get Successful",
    })
  );
  res.end();
};

module.exports = getHandler;
