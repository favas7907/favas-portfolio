import { useEffect } from 'react';
import AchievementsHero from '../components/achievements/AchievementsHero';
import AchievementList from '../components/achievements/AchievementList';

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <AchievementsHero />
      <AchievementList />
    </div>
  );
}
