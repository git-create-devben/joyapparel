import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

interface StockDetail {
  stock: number;
  price: number;
  size: string[];
}

interface StockProps {
  stockDetails: Record<string, StockDetail>;
  handleInputChange: (sku: string, field: string, value: string | number) => void;
  handleSizeChange: (sku: string, size: string) => void;
  addNewVariant: () => void;
}

export default function Stock({
  stockDetails,
  handleInputChange,
  handleSizeChange,
  addNewVariant
}: StockProps) {
  return (
    <Card className="bg-[#050B26] border border-dashed text-white">
      <CardHeader>
        <CardTitle>Stock</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SKU</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-[100px]">Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(stockDetails).map((sku, index) => (
              <TableRow key={sku}>
                <TableCell className="font-semibold">{sku}</TableCell>
                <TableCell>
                  <Label htmlFor={`stock-${index}`} className="sr-only">
                    Stock
                  </Label>
                  <Input
                    id={`stock-${index}`}
                    type="number"
                    value={stockDetails[sku]?.stock || 0}
                    onChange={(e) => handleInputChange(sku, 'stock', e.target.value)}
                    className="bg-[#050B26]"
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor={`price-${index}`} className="sr-only">
                    Price
                  </Label>
                  <Input
                    id={`price-${index}`}
                    type="number"
                    value={stockDetails[sku]?.price || 0}
                    onChange={(e) => handleInputChange(sku, 'price', e.target.value)}
                    className="bg-[#050B26]"
                  />
                </TableCell>
                <TableCell>
                  <ToggleGroup
                    type="single"
                    value={stockDetails[sku]?.size[0] || ''}
                    onValueChange={(value) => handleSizeChange(sku, value)}
                    variant="outline"
                  >
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button
          size="sm"
          variant="ghost"
          className="gap-1"
          onClick={(e) => { e.preventDefault(); addNewVariant(); }}
        >
          <PlusCircle className="h-3.5 w-3.5" />
          Add Variant
        </Button>
      </CardFooter>
    </Card>
  );
}
