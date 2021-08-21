import { User } from './models/User';

const user = new User({ id: 1, name: 'newer new guy', age: 40 });

user.on('save', () => {
  console.log(user);
});

user.save();
