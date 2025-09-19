import { createRoot, Root } from 'react-dom/client';
import { ChatWidget } from './ChatWidget';

let popupRoot: Root | null = null;
let container: HTMLElement | null = null;

function initChatbot(chatbotId: string) {
  // Avoid duplicate container
  if (!container) {
    container = document.createElement('div');
    container.id = 'ticketdesk-ai';
    document.body.appendChild(container);
  }

  const close = () => {
    if (popupRoot) {
      popupRoot.unmount();
      popupRoot = null;
    }
    if (container) {
      container.remove();
      container = null;
    }
  };

  popupRoot = createRoot(container);
  popupRoot.render(<ChatWidget chatbotId={chatbotId} />);
  return { close };
}

export { initChatbot };
