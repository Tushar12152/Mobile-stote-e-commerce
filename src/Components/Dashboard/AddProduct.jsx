import { useState } from "react";
import { useForm } from "react-hook-form"
import { imageUpload } from "../Api/ImageUpload";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AddProduct = () => {
    const [category, setCategory] = useState('apple');
    const axiosSecure=useAxiosSecure()
    const handleSelectChange = (event) => {
      setCategory(event.target.value);
    };


    const { register, handleSubmit,reset, formState: { errors }, } = useForm()

    const onSubmit = async(data) => {
        
        try {
            const imageFile = data.image[0];
            const imageUrl = await imageUpload(imageFile);
            const image = imageUrl?.data?.display_url;
      
            const product = { ...data, Category: category, imageUrl: image };
      

            //    console.log(product)

            const res = await axiosSecure.post('/products', product);
            if (res?.data?.insertedId) {
              toast.success("Your mobile is succesfully uploaded");
              reset();
            }
          } catch (error) {
            console.error('Error upload img', error);
          }
        };
      
    
    

  return (
    <div>


             <h1 className="font-bold text-2xl text-center py-5 border-b-2 w-[20%] mx-auto">Upload Mobile</h1>


         <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input   {...register("Name")} type="text" placeholder="Name" className="input input-bordered"  required />
          </div>
    
        <div className="form-control  w-[50%]">
            <label className="label">
              <span className="label-text">Storage</span>
            </label>
            <input  {...register("Storage")} type="text" placeholder="Storage" className="input input-bordered" required />
          </div>
        </div>
    
    
        <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Ram</span>
            </label>
            <input  {...register("Ram")} type="text" placeholder="Ram" className="input input-bordered"  required />
          </div>
    
        <div className="form-control  w-[50%]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input  {...register("price")} type="text" placeholder="Price" className="input input-bordered"  required />
          </div>
        </div>
    
    
        <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Bettery</span>
            </label>
            <input  {...register("Bettery")} type="text" placeholder="Bettery" className="input input-bordered"  required />
          </div>
    
        <div className="form-control  w-[50%]">
            <label className="label">
              <span className="label-text">Display</span>
            </label>
            <input   {...register("Display")} type="text" placeholder="Display" className="input input-bordered" required />
          </div>
        </div>
    
    
      
    
        
        <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Camara</span>
            </label>
            <input   defaultValue='' {...register("Camara")} type="text" placeholder="Camara"  className="input input-bordered" required />
          </div>
    
        <div className="form-control  w-[50%]">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input defaultValue=''  {...register("Status")} type="text" placeholder="Status" className="input input-bordered" required />
          </div>
        </div>
    
    
        {/* <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span  className="label-text">Admin Name</span>
            </label>
            <input  defaultValue={ data?.name} {...register("admin_name")} type="text" placeholder="Distributor Name" className="input input-bordered" required />
          </div>
    
        <div className="form-control  w-[50%]">
            <label className="label">
              <span className="label-text">Admin Email</span>
            </label>
            <input  defaultValue={data.email}  {...register("admin_email")} type="email" placeholder="Distributor Email" className="input input-bordered" required />
          </div>
        </div> */}
    
    
        <div className="lg:flex gap-4">
        <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input {...register("image")} type="file" placeholder=""   accept='image/*' id="image" className="input input-bordered" required />
          </div>
    
        <div className="form-control  w-[50%]">
            
            <label htmlFor="selectOption">Brand</label>
        <select className="input input-bordered" id="category" name="category" value={category} onChange={handleSelectChange}>
          <option value="samsung">samsung</option>
          <option value="apple">apple</option>
          <option value="vivo">vivo</option>
          <option value="oppo">oppo</option>
          <option value="realme">realme</option>
          <option value="redme">redme</option>
          <option value="howay">howay</option>
          <option value="infinix">infinix</option>
      
        </select>
          </div>
        </div>
    
    
            <div className="form-control mt-2 w-[100%]">
              <input
                type="submit"
                value="Upload Mobile"
                className="input input-bordered bg-[#0000004d] cursor-pointer text-white"
              />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
          </form>

    </div>
  )
}

export default AddProduct