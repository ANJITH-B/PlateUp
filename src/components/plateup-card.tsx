"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Card() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card bg-white bg-opacity-10 hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] h-full w-full rounded-xl p-0 m-6 border  ">

        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-8}
          className="h-full"
        >
          <img
            src="./plateup-card.jpg"
            className="md:h-[500px] h-[50vh] w-fit object-cover rounded-xl group-hover/card:shadow-xl border-white"
            alt="plateup"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
