import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  interface CategoryProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    subCate: string;
    setSubCate: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export default function Category({setCategory, setSubCate}: CategoryProps) {
    return (
      <Card className="bg-[#050B26] border border-dashed text-white">
        <CardHeader>
          <CardTitle>Product Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger id="category" aria-label="Select category" className="bg-[#050B26]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="Blouse">Blouse</SelectItem>
                  <SelectItem value="Gown">Gown</SelectItem>
                  <SelectItem value="Two piece">Two piece</SelectItem>
                  <SelectItem value="Shirt">Shirt</SelectItem>
                  <SelectItem value="Skirt">Skirt</SelectItem>
                  <SelectItem value="Wedding-Gown">Wedding-Gown</SelectItem>
                  <SelectItem value="Custom Dresses">Custom Dresses</SelectItem>
                  <SelectItem value="Trouser">Trouser</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subcategory">Who is it for?</Label>
              <Select onValueChange={setSubCate}>
                <SelectTrigger id="subcategory" aria-label="Select subcategory" className="bg-[#050B26]">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Women">Women</SelectItem>
                  <SelectItem value="Kids">Kids</SelectItem>
                  <SelectItem value="sweatshirts">Collection</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  