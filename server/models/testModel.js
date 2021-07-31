import mongoose from 'mongoose';

const testSchema = mongoose.Schema({
    title: String,
    number: String,
});

const TestModel = mongoose.model('testModel', testSchema);

export default TestModel;