import { Product, ProductInCart } from "@/types/product";

export const productsMock: Product[] = [
  {
    id: "1",
    name: "My Product",
    image_url: "http:///image_url.png",
    price_in_cents: 100,
  },
  {
    id: "2",
    name: "Second Product",
    image_url: "http:///image_url.png",
    price_in_cents: 200,
  },
];

export const productsInCartMock = productsMock.map((product) => {
  return {
    ...product,
    quantity: 1,
  } as ProductInCart;
});
