import { User } from './models/User';

const user = new User({ name: 'ben', age: 53 });

user.events.on('click', () => {
  console.log('i have been clicked!');
});

user.events.trigger('click');
