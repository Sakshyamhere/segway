import LandingCorousel from "@/components/LandingCorousel";
import LandingOthers from "@/components/LandingOthers";
import LandingProducts from "@/components/LandingProducts";

export default function Home() {
  return (
<div>
    <div>
      <LandingCorousel/>
      <LandingProducts/>
      <LandingOthers/>
    </div>
</div>
  );
}
