// eslint-disable-next-line
Promise.prototype.bindState = function(component, key = 'loading') {
  component.setState({ [key]: true });

  return this.then(result => {
    component.setState({ [key]: false });
    return result;
  }).catch(error => {
    component.setState({ [key]: false });
    throw error;
  });
};
