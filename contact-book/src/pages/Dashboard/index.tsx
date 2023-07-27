import { ButtonsDashboard } from "../../components/buttons/buttonsDashboard";
import { Header } from "../../components/header";
import { WallpaperDivPage } from "../../components/wallpaper";

export const Dashboard = () => {
  return (
    <div>
      <Header children={<ButtonsDashboard />} />
      <WallpaperDivPage />
    </div>
  );
};
