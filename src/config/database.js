// Configuring the database
import mongoose from "mongoose";

mongoose.set('useFindAndModify', false);
mongoose.connect(
    "mongodb+srv://dbNovo:Novo.2020@cluster0.j9tlz.mongodb.net/theList?retryWrites=true&w=majority",
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(db => console.log('DB is connect :) '))
  .catch(e => console.log(e));

export default mongoose;