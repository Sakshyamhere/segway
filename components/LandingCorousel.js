import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function LandingCorousel() {
  return (
    <Splide options={{ rewind: true , autoplay: true }} aria-label="React Splide Example">
      <SplideSlide>
        <img src="/ImagesLandingPage/fayecnakjwkjm.webp" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="/ImagesLandingPage/gajbdhcbdjsjc.webp" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="/ImagesLandingPage/hajdbxhsjjad.webp" alt="Image 3" />
      </SplideSlide>
      <SplideSlide>
        <img src="/ImagesLandingPage/nsndnbfskk.webp" alt="Image 4" />
      </SplideSlide>
    </Splide>
  );
}
