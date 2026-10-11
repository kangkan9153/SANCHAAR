import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Intercept global runtime exceptions to prevent blank screen crashes
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    console.warn('SANCHAAR caught unhandled promise rejection:', event.reason);
    event.preventDefault();
  });
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} else {
  console.error('Fatal: Failed to locate #root DOM element for mounting SANCHAAR application.');
}
