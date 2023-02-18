import mongoose from "mongoose";

const Connection = async (  username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog.gavzr3n.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("Database COnnected Successfully")
    } catch (error) {
        console.log('Error while connecting to db', error)
    }
}
export default Connection;