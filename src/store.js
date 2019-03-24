function Store () {
  const self = this;

  self.state = {
    loading: false,
    loggedIn: false,
    authorized: false,
    session: null
  };
}

export default new Store();
