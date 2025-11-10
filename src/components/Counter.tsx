import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      marginTop: '2rem',
      padding: '2rem',
      backgroundColor: 'var(--ifm-color-primary-lightest)',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>Interactive Counter</h3>
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '2rem 0',
        color: 'var(--ifm-color-primary-darkest)'
      }}>
        {count}
      </div>
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'transform 0.1s'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Increment (+1)
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            backgroundColor: 'var(--ifm-color-primary-dark)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'transform 0.1s'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Decrement (-1)
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'transform 0.1s'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Reset
        </button>
      </div>
      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--ifm-color-secondary)' }}>
        Click the buttons to see React state in action!
      </p>
    </div>
  );
};
