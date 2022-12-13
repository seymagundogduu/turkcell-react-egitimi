import { object, string} from 'yup';

let contactSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  message: string().min(5).required(),
  
});

export default contactSchema;