import { useState } from 'react';
import { ChatWidget } from './ChatWidget';

function App() {
  const [chatbotId] = useState<string>(
    'cb_260c0ee4-387d-47fe-b345-3dff86aed49b'
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Ticketdesk Chatbot Test Page
        </h1>
        <p className="text-center text-gray-600">
          The chatbot will appear at the bottom-right corner of this page.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Setup Instructions:
          </h2>
          <ol className="list-decimal list-inside bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <li>
              Login to your{' '}
              <a
                className="font-medium text-blue-600"
                href="https://app.ticketdesk.ai/settings/chatbots"
                target="_blank"
              >
                Ticketdesk AI
              </a>{' '}
              account.
            </li>
            <li>Create a chatbot from the dashboard.</li>
            <li>
              Copy the <span className="font-medium">Chatbot ID</span> (looks
              like
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                cb_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
              </code>
              ).
            </li>
            <li>Paste it into the script below, replacing the sample ID:</li>
          </ol>

          <pre
          className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre"
        >
<code>
&lt;script&gt;
  window.TICKETDESK_CHATBOT_ID = 'cb_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
&lt;/script&gt;
&lt;script src="./dist/ticketdesk-chatbot.umd.cjs"&gt;&lt;/script&gt;
</code>
</pre>
        </div>
      </div>

      <ChatWidget {...{ chatbotId: chatbotId }} />
    </div>
  );
}

export default App;
