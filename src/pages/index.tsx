import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import shirt1 from "../assets/shirts/shirt1.png";
import shirt2 from "../assets/shirts/shirt2.png";
import shirt3 from "../assets/shirts/shirt3.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={520} alt="" />
        <footer>
          <strong>Camiseta 1</strong>
          <span>$ 42</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={520} alt="" />
        <footer>
          <strong>Camiseta 2</strong>
          <span>$ 84</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={520} alt="" />
        <footer>
          <strong>Camiseta 3</strong>
          <span>$ 126</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={520} alt="" />
        <footer>
          <strong>Camiseta 4</strong>
          <span>$ 168</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}