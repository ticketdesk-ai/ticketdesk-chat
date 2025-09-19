import { useState } from 'react';
import { ChatWidget } from './ChatWidget';

function App() {
  const [chatbotId] = useState<string>(
    'cb_260c0ee4-387d-47fe-b345-3dff86aed49b'
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Chat Widget Configurator</h1>
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-6">Customize Your Widget</h2>
        </div>
      </div>

      <ChatWidget {...{ chatbotId: chatbotId }} />
    </div>
  );
}

export default App;
