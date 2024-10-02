import { CORE_CONCEPTS } from './data';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  let tabContent = 'click a button'

  let handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {(() => {
              return CORE_CONCEPTS.map( props => {
                return (<CoreConcept
                    {...props}
                  />)
              })
            })()}
          </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            </menu>
            {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;