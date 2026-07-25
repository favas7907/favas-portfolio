import { useEffect } from 'react';
import AchievementsHero from '../components/achievements/AchievementsHero';
import FeaturedAchievement from '../components/achievements/FeaturedAchievement';
import AchievementTimeline from '../components/achievements/AchievementTimeline';
import AchievementList from '../components/achievements/AchievementList';
import { ACHIEVEMENTS } from '../constants/data';

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredAchievement = ACHIEVEMENTS.find(a => a.id === 'global-hackathon-2024');

  return (
    <div className="bg-white min-h-screen">
      <AchievementsHero />
      {featuredAchievement && <FeaturedAchievement achievement={featuredAchievement} />}
      <AchievementTimeline />
      <AchievementList />
    </div>
  );
}
