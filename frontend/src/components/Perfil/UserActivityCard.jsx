import React from 'react';

const UserActivityCard = ({ activities }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Atividades Recentes</h3>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.date}</p>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                activity.status === 'resolvida'
                  ? 'bg-green-200 text-green-700'
                  : 'bg-yellow-200 text-yellow-700'
              }`}
            >
              {activity.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UserActivityCard };
