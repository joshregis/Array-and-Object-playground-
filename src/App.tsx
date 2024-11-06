import React, { useState } from 'react';
import { Code, PlayCircle, RefreshCw, Plus, Trash2 } from 'lucide-react';
import ArrayManipulator from './components/ArrayManipulator';
import ObjectManipulator from './components/ObjectManipulator';
import { TabButton } from './components/TabButton';

function App() {
  const [activeTab, setActiveTab] = useState<'array' | 'object'>('array');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Data Structure Playground</h1>
          </div>
          <p className="text-gray-600">Experiment with array and object manipulations in real-time</p>
        </header>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <TabButton 
              active={activeTab === 'array'} 
              onClick={() => setActiveTab('array')}
              icon={<PlayCircle className="w-4 h-4" />}
            >
              Array Operations
            </TabButton>
            <TabButton 
              active={activeTab === 'object'} 
              onClick={() => setActiveTab('object')}
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Object Operations
            </TabButton>
          </div>

          <div className="p-6">
            {activeTab === 'array' ? <ArrayManipulator /> : <ObjectManipulator />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;