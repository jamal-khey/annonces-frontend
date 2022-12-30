
import { useForm, SubmitHandler } from "react-hook-form";
import axios, {
    AxiosRequestConfig
  } from 'axios';

type ProductInputs = {
    name: string,
    price: number,
  };

export const AddProductForm = ()=> {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<ProductInputs>();
    async function onSubmitForm(values: any) {
        values.price = Number(values.price)
        let config: AxiosRequestConfig<any> = {
          method: 'POST',
          url: `http://localhost:3000/api/v1/addproduct`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: values,
        };
    
        try {
          const response = await axios(config);
          //console.log(response);
          if (response.status == 200) {
            reset();
          }
        } catch (err) {
            //console.log(err)
        }
      }
  
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name", {required: true}) } defaultValue="new product" />
            <label htmlFor="roll">product price</label>
            <input
                type="number"
                defaultValue={10}
                id="price"
                {...register("price", {required: true})}
                minLength={1}
                maxLength={20}
            />
            <button type="submit">Submit</button>
        </form>
    )
}