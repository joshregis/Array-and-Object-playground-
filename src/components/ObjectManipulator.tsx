import React, { useState } from 'react';
import { Plus, Trash2, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface ObjectData {
  [key: string]: string;
}

const ObjectManipulator = () => {
  const [object, setObject] = useState<ObjectData>({
    name: 'John',
    age: '30',
    city: 'New York'
  });
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState<string>('');

  const operations = {
    'Get Keys': () => setResult(JSON.stringify(Object.keys(object))),
    'Get Values': () => setResult(JSON.stringify(Object.values(object))),
    'Get Entries': () => setResult(JSON.stringify(Object.entries(object))),
    'To JSON': () => setResult(JSON.stringify(object, null, 2)),
  };

  const addProperty = () => {
    if (newKey && newValue) {
      setObject({ ...object, [newKey]: newValue });
      setNewKey('');
      setNewValue('');
    }
  };

  const removeProperty = (key: string) => {
    const newObject = { ...object };
    delete newObject[key];
    setObject(newObject);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Property name"
        />
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Property value"
        />
        <Button onClick={addProperty} icon={<Plus className="w-4 h-4" />}>
          Add
        </Button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Current Object:</h3>
        <div className="space-y-2">
          {Object.entries(object).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between bg-white px-4 py-2 rounded-lg border"
            >
              <div>
                <span className="font-medium text-indigo-600">{key}:</span>
                <span className="ml-2 text-gray-700">{value}</span>
              </div>
              <button
                onClick={() => removeProperty(key)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {Object.entries(operations).map(([name, operation]) => (
          <Button
            key={name}
            onClick={operation}
            icon={<RefreshCw className="w-4 h-4" />}
            variant="outline"
          >
            {name}
          </Button>
        ))}
      </div>

      {result && (
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-indigo-900 mb-2">Result:</h3>
          <pre className="bg-white p-4 rounded-lg overflow-x-auto text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ObjectManipulator;