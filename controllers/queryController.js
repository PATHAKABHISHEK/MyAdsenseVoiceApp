class QueryController {
  constructor(queryRouter) {
    this.queryRouter = queryRouter;
    this.registerRoutes();
  }

  registerRoutes() {}
}

const queryController = (queryRouter) => {
  return new QueryController(queryRouter);
};

module.exports = {
  queryController,
};
