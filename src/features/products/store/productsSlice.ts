import type { Product, CompanyDocument } from "@/shared/types";
import {
  products as initialProducts,
  documents as initialDocuments,
} from "@/shared/data";

export interface ProductsSlice {
  products: Product[];
  documents: CompanyDocument[];
  addDocument: (doc: CompanyDocument) => void;
}

export const createProductsSlice = (set: any): ProductsSlice => ({
  products: initialProducts,
  documents: initialDocuments,
  addDocument: (doc) =>
    set((state: any) => ({
      documents: [doc, ...state.documents],
    })),
});
