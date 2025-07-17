import Banner from "@/components/main/Banner";
import PremiumAchievementShowcase from "@/Pages/Placements/premium-achievement-showcase";
import placementData from "@/data/placementData";
import PlacementStats from "@/Pages/Placements/PlacementStats";
import GridBackground from "@/components/ui/GridBackground";

export default function Placements() {
  return (
    <>
      <div>
        <Banner
          title="Our Top Placements"
          image={"/placement/placementBanner.webp"}
          imageAlt="Our Top Placements"
        />
      </div>
      <GridBackground>
        <PremiumAchievementShowcase data={placementData} />
        <PlacementStats data={placementData} />
      </GridBackground>
    </>
  );
}
