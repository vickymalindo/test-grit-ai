function auth(req, res, next) {
  const userId = req.header('User-id');
  const scope = req.header('Scope');

  if (userId === 'ifabula' && scope === 'user') {
    next();
  } else {
    res
      .status(401)
      .json({ responseCode: 401, responseMessage: 'UNAUTHORIZED' });
  }
}

export default auth;
