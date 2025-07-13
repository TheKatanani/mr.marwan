'use client';

import { LocalizedField } from '@/types';
import React from 'react';

type Item = {
  title: LocalizedField;
  description: LocalizedField;
};

type Props = {
  label: string;
  value: Item[] | undefined;
  onChange: (val: Item[]) => void;
};

const emptyItem: Item = {
  title: { en: '', ar: '' },
  description: { en: '', ar: '' },
};

export default function LocalizedTitleDescriptionList({ label, value = [], onChange }: Props) {
  const items = value.length > 0 ? value : [emptyItem]; // auto-show one if empty

  const handleItemChange = (
    index: number,
    field: keyof Item,
    lang: keyof LocalizedField,
    newVal: string
  ) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: {
        ...updated[index][field],
        [lang]: newVal,
      },
    };
    onChange(updated);
  };

  const handleAdd = () => {
    onChange([...items, emptyItem]);
  };

  const handleRemove = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <label className="font-semibold text-lg">{label}</label>
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-md space-y-2 bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Title (EN)</label>
              <input
                type="text"
                value={item.title?.en}
                onChange={(e) => handleItemChange(index, 'title', 'en', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Title (AR)</label>
              <input
                type="text"
                value={item.title?.ar}
                onChange={(e) => handleItemChange(index, 'title', 'ar', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Description (EN)</label>
              <textarea
                value={item.description?.en}
                onChange={(e) => handleItemChange(index, 'description', 'en', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description (AR)</label>
              <textarea
                value={item.description?.ar}
                onChange={(e) => handleItemChange(index, 'description', 'ar', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {items.length > 1 && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-600 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </div>
  );
}
