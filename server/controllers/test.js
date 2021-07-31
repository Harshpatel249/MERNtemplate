import TestModel from '../models/testModel.js';

//Controller function for routes
export const test = async (req,res) => {
    // res.send('This works');
    try {
        const testData = await TestModel.find();

        console.log(testData);

        res.status(200).json(testData);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
} 

export const createTest = async (req,res) => {
    // res.send('Test creation');
    const testContent = req.body;
    const newTest = new TestModel(testContent);

    try {
        await newTest.save();

        res.status(201).json(newTest);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}