import { Service, SubscriptionPackage } from "@/types/servece";
import React from "react";

function Subscriptions({
  handleArrayChange,
  subscriptions,
  handleAddItem
}: {
  handleArrayChange: <K extends keyof Service>(
    field: K,
    index: number,
    key: string,
    value: any
  ) => void;
  subscriptions: SubscriptionPackage[];
  handleAddItem: <K extends keyof Service>(field: K, item: any) => void;
}) {
  return (
    <div>
      <label className="block font-medium">Subscriptions</label>
      {subscriptions.map((sub, index) => (
        <div key={index} className="space-y-2 my-5 border p-4 rounded-md">
          <input
            className="input"
            placeholder="Package Name"
            value={sub.packageName}
            onChange={(e) =>
              handleArrayChange(
                "subscriptions",
                index,
                "packageName",
                e.target.value
              )
            }
          />
          <input
            className="input"
            placeholder="Headline"
            value={sub.headline}
            onChange={(e) =>
              handleArrayChange(
                "subscriptions",
                index,
                "headline",
                e.target.value
              )
            }
          />
          <textarea
            className="input"
            placeholder="Description"
            value={sub.description}
            onChange={(e) =>
              handleArrayChange(
                "subscriptions",
                index,
                "description",
                e.target.value
              )
            }
          />
          <input
            className="input"
            placeholder="Subscribe URL"
            value={sub.subscribeURL}
            onChange={(e) =>
              handleArrayChange(
                "subscriptions",
                index,
                "subscribeURL",
                e.target.value
              )
            }
          />
          <div>
            <label className="block font-medium">What You Get</label>
            {sub.whatYouGet.map((item, i) => (
              <input
                key={i}
                className="input my-1"
                placeholder="Enter what you get"
                value={item}
                onChange={(e) => {
                  const updated = [...sub.whatYouGet];
                  updated[i] = e.target.value;
                  handleArrayChange(
                    "subscriptions",
                    index,
                    "whatYouGet",
                    updated
                  );
                }}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                const updated = [...sub.whatYouGet, ""];
                handleArrayChange(
                  "subscriptions",
                  index,
                  "whatYouGet",
                  updated
                );
              }}
              className="text-blue-600 text-sm"
            >
              + Add What You Get
            </button>
          </div>
          <div>
            <label className="block font-medium">Problems We Solve</label>
            {sub.problemsWeSolve.map((item, i) => (
              <input
                key={i}
                className="input my-1"
                placeholder="Enter problem solved"
                value={item}
                onChange={(e) => {
                  const updated = [...sub.problemsWeSolve];
                  updated[i] = e.target.value;
                  handleArrayChange(
                    "subscriptions",
                    index,
                    "problemsWeSolve",
                    updated
                  );
                }}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                const updated = [...sub.problemsWeSolve, ""];
                handleArrayChange(
                  "subscriptions",
                  index,
                  "problemsWeSolve",
                  updated
                );
              }}
              className="text-blue-600 text-sm"
            >
              + Add Problem Solved
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="text-blue-600 text-sm"
        onClick={() =>
          handleAddItem("subscriptions", {
            packageName: "",
            headline: "",
            description: "",
            whatYouGet: [""],
            problemsWeSolve: [""],
            subscribeURL: "",
          })
        }
      >
        + Add Subscription
      </button>
    </div>
  );
}

export default Subscriptions;
