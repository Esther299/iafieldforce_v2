import { useState } from "react";
import { Plus, Upload } from "lucide-react";
import { DocumentList } from "../..";
import { Button, Card, TabBar, TabPill } from "../../../../ui";
import type { ProductMarca } from "../../../../../types/academia";

type ProductTab = "campaigns" | "objections" | "faqs";

const PRODUCT_TABS: { id: ProductTab; label: string }[] = [
  { id: "campaigns", label: "Campañas anteriores" },
  { id: "objections", label: "Manejo de Objecciones" },
  { id: "faqs", label: "Preguntas frecuentes" },
];

/** Pantalla del Gerente de Marca: productos, campañas, objeciones y FAQs. */
export function ProductsView({
  products,
  onAddProduct,
  onUploadDocument,
}: {
  products: ProductMarca[];
  onAddProduct: () => void;
  onUploadDocument: (productId: string, campaignId?: string) => void;
}) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    products.length > 0 ? products[0].id : null,
  );
  const [selectedTab, setSelectedTab] = useState<ProductTab>("campaigns");

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  return (
    <div className="space-y-4">
      <TabBar>
        {products.map((product) => (
          <TabPill
            key={product.id}
            active={selectedProductId === product.id}
            onClick={() => setSelectedProductId(product.id)}
          >
            {product.name}
          </TabPill>
        ))}
        <Button variant="outline" size="sm" onClick={onAddProduct}>
          <Plus size={14} className="mr-1" />
          Crear más productos
        </Button>
      </TabBar>

      {selectedProduct && (
        <div className="space-y-4">
          <TabBar bordered>
            {PRODUCT_TABS.map((tab) => (
              <TabPill
                key={tab.id}
                size="sm"
                active={selectedTab === tab.id}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </TabPill>
            ))}
          </TabBar>

          {selectedTab === "campaigns" && (
            <div className="space-y-4">
              {selectedProduct.campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-navy">{campaign.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        onUploadDocument(selectedProduct.id, campaign.id)
                      }
                    >
                      <Upload size={14} className="mr-1" />
                      Cargar Documento
                    </Button>
                  </div>
                  <div className="mt-3">
                    <DocumentList documents={campaign.documents} />
                  </div>
                </Card>
              ))}
            </div>
          )}

          {selectedTab === "objections" && (
            <DocumentList
              documents={selectedProduct.objections}
              title="Manejo de Objecciones"
              onUpload={() => onUploadDocument(selectedProduct.id)}
            />
          )}

          {selectedTab === "faqs" && (
            <DocumentList
              documents={selectedProduct.faqs}
              title="Preguntas frecuentes"
              onUpload={() => onUploadDocument(selectedProduct.id)}
            />
          )}
        </div>
      )}
    </div>
  );
}
