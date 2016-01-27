import Mirage, { faker as f } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: `${f.name.firstName()} ${f.name.lastName()}`,
  email: f.internet.email(),
  avatar: f.image.avatar(),
  company: f.company.companyName(),
  loggedIn: true,
});
