defaultHandler = (req, res) => {
  res.write(
    JSON.stringify({
      message: `API not found at ${req.url}`,
    })
  );
  res.end();
};

module.exports = defaultHandler;
