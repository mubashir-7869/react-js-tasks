import React, { useState } from "react";
import axios from "axios";

const ENTITIES = ["posts", "comments", "albums", "photos", "todos", "users"];
const API_URL = 'https://jsonplaceholder.typicode.com';
const EntityViewer = () => {
  const [toggles, setToggles] = useState({});
  const [data, setData] = useState({});

  // Toggle switch
  const handleToggle = (entity) => {
    const isOn = !toggles[entity];
    setToggles({ ...toggles, [entity]: isOn });

    // fetch data
    if (isOn && !data[entity]) {
      axios
        .get(`${API_URL}/${entity}`)
        .then((res) => {
          setData((prev) => ({ ...prev, [entity]: res.data }));
        })
        .catch((err) => {
          console.error(`Error fetching ${entity}:`, err);
        });
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Left Column */}
      <div
        style={{
          width: "30%",
          paddingRight: "20px",
          borderRight: "1px solid #ccc",
        }}
      >
        <h4>Entities</h4>
        {ENTITIES.map((entity) => (
          <div key={entity} style={{ marginBottom: "10px" }}>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={toggles[entity] || false}
                  onChange={() => handleToggle(entity)}
                />
                <label className="form-check-label" for="flexSwitchCheckDefault">
                 {entity.charAt(0).toUpperCase() + entity.slice(1)}
                </label>
              </div>
          </div>
        ))}
      </div>

      {/* Right Column*/}
      <div style={{ width: "70%", paddingLeft: "20px" }}>
        {ENTITIES.map((entity) =>
          toggles[entity] && data[entity] ? (
            <div key={entity} style={{ marginBottom: "20px" }}>
              <h5>{entity.toUpperCase()}</h5>
              <ul>
                {data[entity].slice(0, 5).map((item) => (
                  <li key={item.id || item.name || item.title}>
                    {item.title || item.name || item.body || "No Title"}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default EntityViewer;
