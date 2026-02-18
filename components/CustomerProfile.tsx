'use client';

import { CustomerProfile as ProfileType } from '@/types';

interface CustomerProfileProps {
  profile: ProfileType;
}

export default function CustomerProfile({ profile }: CustomerProfileProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Target Customer Profile</h2>
      <h3 className="font-semibold text-blue-700 mb-3">{profile.title}</h3>
      <p className="text-sm text-slate-600 mb-4">{profile.demographics}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-1">Pain Points</h4>
          <ul className="space-y-1">
            {profile.painPoints.map((point, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-1">Behaviors</h4>
          <ul className="space-y-1">
            {profile.behaviors.map((behavior, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                {behavior}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-1">Where to Find Them</h4>
          <div className="flex flex-wrap gap-2">
            {profile.whereToFind.map((place, i) => (
              <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                {place}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-1">Decision Factors</h4>
          <ul className="space-y-1">
            {profile.decisionFactors.map((factor, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-1">Budget Range</h4>
          <p className="text-sm text-slate-600">{profile.budget}</p>
        </div>
      </div>
    </div>
  );
}
