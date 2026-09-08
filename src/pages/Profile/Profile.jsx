import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const Profile = () => {
  const { t } = useI18n();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'AI Harry User',
    email: 'user@example.com',
    bio: 'Content creator and AI enthusiast. Creating amazing stories with the help of artificial intelligence.',
    avatar: '',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-on-surface mb-2">
          {t('profile.title')}
        </h1>
        <p className="text-lg text-on-surface-variant">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Card */}
      <GlassCard elevated className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-6xl text-primary">person</span>
                )}
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-on-primary border-2 border-surface flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-on-surface">{profile.name}</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-primary px-6 py-2 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  {t('profile.edit')}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  {t('profile.name')}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full input-field px-4 py-3"
                  />
                ) : (
                  <p className="text-on-surface">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  {t('profile.email')}
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="w-full input-field px-4 py-3"
                  />
                ) : (
                  <p className="text-on-surface">{profile.email}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  {t('profile.bio')}
                </label>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={4}
                    className="w-full input-field px-4 py-3 resize-none"
                  />
                ) : (
                  <p className="text-on-surface leading-relaxed">{profile.bio}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="btn-primary px-6 py-2 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">save</span>
                  {t('profile.save')}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn-secondary px-6 py-2"
                >
                  {t('common.cancel')}
                </button>
              </div>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <GlassCard elevated>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">24</div>
            <div className="text-sm text-on-surface-variant">Articles</div>
          </div>
        </GlassCard>
        <GlassCard elevated>
          <div className="text-center">
            <div className="text-4xl font-black text-tertiary mb-2">16</div>
            <div className="text-sm text-on-surface-variant">Published</div>
          </div>
        </GlassCard>
        <GlassCard elevated>
          <div className="text-center">
            <div className="text-4xl font-black text-secondary mb-2">12.5K</div>
            <div className="text-sm text-on-surface-variant">Total Views</div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Profile;
