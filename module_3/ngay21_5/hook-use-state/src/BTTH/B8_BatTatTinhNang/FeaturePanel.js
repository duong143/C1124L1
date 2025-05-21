import React, { useState } from 'react';
import FeatureToggle from './FeatureToggle';

function FeaturePanel() {
  const [features, setFeatures] = useState([
    { name: 'WiFi', enabled: true },
    { name: 'Bluetooth', enabled: false },
    { name: 'Dark Mode', enabled: false },
    { name: 'Notifications', enabled: true },
  ]);

  const toggleFeature = (index) => {
    const updated = [...features];
    updated[index].enabled = !updated[index].enabled;
    setFeatures(updated);
  };

  return (
    <div>
      <h2>Trạng thái tính năng</h2>
      {features.map((feature, index) => (
        <FeatureToggle
          key={feature.name}
          name={feature.name}
          enabled={feature.enabled}
          onToggle={() => toggleFeature(index)}
        />
      ))}
    </div>
  );
}

export default FeaturePanel;
