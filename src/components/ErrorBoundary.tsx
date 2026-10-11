import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SANCHAAR ErrorBoundary caught an error:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    try {
      window.location.hash = '';
      window.history.pushState({}, '', '/');
    } catch {
      // ignore in sandboxed iframes
    }
    try {
      window.location.reload();
    } catch {
      // fallback in sandboxed frames
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#101923',
            color: '#ffffff',
            padding: '2rem',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              backgroundColor: '#1a2533',
              border: '1px solid #10bfc5',
              borderRadius: '8px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                margin: '0 auto 1.5rem',
                backgroundColor: 'rgba(16, 191, 197, 0.15)',
                border: '1px solid #10bfc5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10bfc5',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              !
            </div>

            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              SANCHAAR — Temporary Render Glitch
            </h1>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              An unexpected render issue was detected and intercepted. Click below to refresh the page state and return to the home overview.
            </p>

            {this.state.error?.message && (
              <div
                style={{
                  backgroundColor: '#101923',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: '#f87171',
                  textAlign: 'left',
                  marginBottom: '1.5rem',
                  wordBreak: 'break-word',
                  maxHeight: '120px',
                  overflowY: 'auto',
                }}
              >
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReset}
              style={{
                backgroundColor: '#10bfc5',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.75rem 2rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0e9da2')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#10bfc5')}
            >
              Return to SANCHAAR Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
