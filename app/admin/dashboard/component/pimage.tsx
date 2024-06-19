import Image from "next/image";
import { Upload } from "lucide-react";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface PimageProps {
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  previewUrls: string[];
  setPreviewUrls: React.Dispatch<React.SetStateAction<string[]>>;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

export default function Pimage({
  setImages,
  previewUrls,
  setPreviewUrls,
}: PimageProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prev) => [...prev, ...newImages]);

      newImages.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrls((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <Card className="bg-[#050B26] text-white overflow-hidden rounded-md border border-dashed">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {previewUrls.length === 0 && (
            <Image
              alt="Placeholder"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src="https://placehold.co/600x400@2x.png"
              width="300"
              priority
            />
          )}
          <div className="grid grid-cols-3 gap-2">
            {previewUrls.map((url, index) => (
              <>
                <Button onClick={handleOpen}>
                  {" "}
                  <Image
                    key={index}
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={url}
                    width="100"
                    priority
                  />
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  closeAfterTransition
                >
                  <Box sx={{...style, width: 800 }}>
                    <Image
                      key={index}
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src={url}
                      width="84"
                      priority
                    />
                  </Box>
                </Modal>
              </>
            ))}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<Upload />}
              className="rounded-md border border-dashed bg-gray-300 text-black text-center"
            >
              <VisuallyHiddenInput
                type="file"
                multiple
                onChange={handleImageChange}
              />
              <span className="sr-only">Upload</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
