import { Product } from "../types";
type ProductFormProps = {
  product?: Product;
};

export default function ProductForm({ product }: ProductFormProps) {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Nombre Producto:
        </label>
        <input
          id="name"
          type="text"
          defaultValue={product?.name}
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Producto"
          name="name"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          type="number"
          defaultValue={product?.price}
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Precio Producto. ej. 200, 300"
          name="price"
        />
      </div>
    </>
  );
}
