let logs = [];

module.exports = (req, res) => {
  if (req.query.logs) {
    res.json(logs);
    return;
  }
  logs.push(req.body);
  if (logs.length > 100) {
    logs = logs.slice(1);
  }
  res.json({
    message: 'OK',
  });
};
