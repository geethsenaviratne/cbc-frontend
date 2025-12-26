import axios from "axios";

export default function AdminProductsPage() {

axios.get("https://localhost:5000/api/products").then((res)=>{
    console.log(res);
})






  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products Management</h1>
      <p>Here you can manage all the products in the inventory.</p>
      {/* Additional product management UI can be added here */}
    </div>
  );
}