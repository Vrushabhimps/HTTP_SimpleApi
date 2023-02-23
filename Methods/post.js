postHandler = (req, res) => {
  res.write(
    JSON.stringify({
      message: "POST Successful",
    })
  );
  res.end();
};

module.exports = postHandler;
