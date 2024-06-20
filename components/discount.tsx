"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
type DiscountType = {
  id: number;
  title: string;
  description: string;
};
const DiscountData: DiscountType[] = [
  {
    id: 1,
    title: "Get 10% of all Order",
    description: "Discount automatically applied at checkout",
  },
  {
    id: 2,
    title: "GET FREE SHIPPING on order over $500",
    description: "Discount automatically applied at checkout",
  },
  {
    id: 3,
    title: "Add Gown to your cart at no cost",
    description: "After shopping Gown or other product",
  },
];
export default function Discount() {
  return (
    <div>
      <Carousel
        className="bg-[#eee] "
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className=" w-full h-24 ">
          {Array.from(DiscountData).map((data) => (
            <CarouselItem
              key={data.id}
              className=" flex justify-center items-center md:gap-8 gap-3"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-black  font-black md:text-1xl lg:text-[1.2rem] text-xs ">
                  {data.title}
                </h2>
                <span className="text-[#111] md:text-sm text-xs font-light">
                  {data.description}
                </span>
              </div>
              <Button className="bg-orange-400 hover:bg-orange-300">
                Shop now!
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" text-2xl absolute top-12 left-2 md:left-8" />
        <CarouselNext className=" text-2xl absolute top-12 right-3 md:right-8" />
      </Carousel>
    </div>
  );
}
