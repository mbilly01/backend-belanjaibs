import Customer from "../models/CustomerModel.js";

export const getCustomers = async (req,res) => {
  try {
    const response = await Customer.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getCustomersById = async (req,res) => {
  try {
    const response = await Customer.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    
  }
}

export const createCustomer = async (req,res) => {
  try {
    await Customer.create(req.body);
    res.status(201).json({msg:'customer created'})
  } catch (error) {
    console.log(error.message);
  }
}

export const updateCustomer = async (req,res) => {
  try {
      await Customer.update(req.body,{
        where: {
          id:req.params.id
        }
      });
      res.status(200).json({msg:'customer updated'});
  } catch (error) {
    console.log(error.message)
  }
}
export const deleteCustomer = async (req,res) => {
  try {
      await Customer.destroy({
        where: {
          id:req.params.id
        }
      });
      res.status(200).json({msg:'customer deleted'});
  } catch (error) {
    console.log(error.message)
  }
}