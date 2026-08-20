import { useState } from "react";
import { useAppStore } from "@/store";
import type { DocType } from "@/shared/types";

export function useProducts() {
  const store = useAppStore();
  const [isAddDocModalOpen, setIsAddDocModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  // Formulario de documento
  const [title, setTitle] = useState("");
  const [type, setType] = useState<DocType>("product_profile");
  const [productId, setProductId] = useState(store.products[0]?.id ?? "");
  const [content, setContent] = useState("");

  const selectedProduct = selectedProductId
    ? store.products.find((p) => p.id === selectedProductId)
    : null;

  const filteredDocuments = selectedProductId
    ? store.documents.filter(
        (d) => d.productId === selectedProductId || !d.productId,
      )
    : [];

  const handleAddDocument = () => {
    if (!title.trim() || !content.trim()) return;
    store.addDocument({
      id: `doc-${Date.now()}`,
      title,
      type,
      productId: productId || undefined,
      content,
      tags: title.toLowerCase().split(/\s+/).slice(0, 4),
      version: "1.0",
      approved: true,
      updatedAt: new Date().toISOString().slice(0, 10),
    });
    setTitle("");
    setContent("");
    setIsAddDocModalOpen(false);
  };

  const resetForm = () => {
    setTitle("");
    setType("product_profile");
    setProductId(store.products[0]?.id ?? "");
    setContent("");
  };

  return {
    // Store
    products: store.products,
    documents: store.documents,
    // UI state
    isAddDocModalOpen,
    selectedProductId,
    selectedProduct,
    filteredDocuments,
    // Form fields
    title,
    type,
    productId,
    content,
    // Setters
    setIsAddDocModalOpen,
    setSelectedProductId,
    setTitle,
    setType,
    setProductId,
    setContent,
    // Actions
    handleAddDocument,
    resetForm,
  };
}
