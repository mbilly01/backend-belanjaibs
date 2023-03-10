import express from 'express';
import {getCustomers,getCustomersById,createCustomer,updateCustomer,deleteCustomer} from '../controllers/CustomerController.js';

const router = express.Router();

router.get('/customers',getCustomers);
router.get('/customers/:id',getCustomersById);
router.post('/customers',createCustomer);
router.patch('/customers/:id',updateCustomer);
router.delete('/customers/:id',deleteCustomer);

export default router;