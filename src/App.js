import React, { useRef } from 'react';

const A = () => <div style={{ height: '100vh', backgroundColor: '#f1c40f' }}><h2>Component A</h2></div>;
const B = () => <div style={{ height: '100vh', backgroundColor: '#e67e22' }}><h2>Component B</h2></div>;
const C = () => <div style={{ height: '100vh', backgroundColor: '#2ecc71' }}><h2>Component C</h2></div>;
const D = () => <div style={{ height: '100vh', backgroundColor: '#3498db' }}><h2>Component D</h2></div>;
const E = () => <div style={{ height: '100vh', backgroundColor: '#9b59b6' }}><h2>Component E</h2></div>;
const F = () => <div style={{ height: '100vh', backgroundColor: '#e74c3c' }}><h2>Component F</h2></div>;

const App = () => {
 
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const fRef = useRef(null);

  // Scroll to a component when the link is clicked
  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li><button onClick={() => scrollToComponent(aRef)}>Go to A</button></li>
          <li><button onClick={() => scrollToComponent(bRef)}>Go to B</button></li>
          <li><button onClick={() => scrollToComponent(cRef)}>Go to C</button></li>
          <li><button onClick={() => scrollToComponent(dRef)}>Go to D</button></li>
          <li><button onClick={() => scrollToComponent(eRef)}>Go to E</button></li>
          <li><button onClick={() => scrollToComponent(fRef)}>Go to F</button></li>
        </ul>
      </nav>

      {/* Components with refs */}
      <div ref={aRef}><A /></div>
      <div ref={bRef}><B /></div>
      <div ref={cRef}><C /></div>
      <div ref={dRef}><D /></div>
      <div ref={eRef}><E /></div>
      <div ref={fRef}><F /></div>
    </div>
  );
};

export default App;
