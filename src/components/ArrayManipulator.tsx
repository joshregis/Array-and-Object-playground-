import React, { useState } from 'react';
import { Plus, Trash2, RefreshCw } from 'lucide-react';
import { Button } from './Button';

const ArrayManipulator = () => {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);
  const [newItem, setNewItem] = useState('');
  const [result, setResult] = useState<number[]>([]);

  const operations = {
    map: () => setResult(array.map(x => x * 2)),
    filter: () => setResult(array.filter(x => x % 2 === 0)),
    reduce: () => setResult([array.reduce((acc, curr) => acc + curr, 0)]),
    sort: () => setResult([...array].sort((a, b) => a - b)),
    reverse: () => setResult([...array].reverse()),
  };

  const addItem = () => {
    const num = parseInt(newItem);
    if (!isNaN(num)) {
      setArray([...array, num]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <input
          type="number"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a number"
        />
        <Button onClick={addItem} icon={<Plus className="w-4 h-4" />}>
          Add
        </Button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Current Array:</h3>
        <div className="flex flex-wrap gap-2">
          {array.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border"
            >
              <span>{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(operations).map(([name, operation]) => (
          <Button
            key={name}
            onClick={operation}
            icon={<RefreshCw className="w-4 h-4" />}
            variant="outline"
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Button>
        ))}
      </div>

      {result.length > 0 && (
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-indigo-900 mb-2">Result:</h3>
          <div className="flex flex-wrap gap-2">
            {result.map((item, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrayManipulator;