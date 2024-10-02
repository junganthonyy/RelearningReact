import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';


function App() {
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
        
      </main>
    </div>
  );
}

export default App;