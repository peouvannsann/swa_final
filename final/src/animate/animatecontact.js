import React from 'react';
import Element from '../export/exportcontact';


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">      
      {Element.map(element => (
        <FadeInSection>
          <div className="box">
            <span>{element}</span>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

export default App;