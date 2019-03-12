function Store () {
  const self = this;

  self.state = {
    loading: false,
    loggedIn: false
  };
}

export default new Store();
