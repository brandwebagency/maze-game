export interface DeleteDialogProps {
  type:
    | "brand"
    | "category"
    | "product"
    | "retailer"
    | "location"
    | "employee"
    | "pool"
    | "user"
    | "brandRetailJunction";
  onSubmit: () => void;
}
