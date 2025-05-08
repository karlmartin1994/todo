import TitleBar from './components/TitleBar';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TitleBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

export default App; 