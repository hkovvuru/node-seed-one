import mongoose from 'mongoose';

const uri = 'mongodb://localhost/nodejsdb';

const initializeDatabase = mongoose.connect(uri, { useNewUrlParser: true });

initializeDatabase.catch(err => console.log(`Error while connecting to the database ${err}`));

mongoose.connection.once('open', () => console.log('Successfully connected to the database'));

export default mongoose;
