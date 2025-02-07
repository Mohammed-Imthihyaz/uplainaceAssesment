import React from 'react';
import { AppProvider } from './context/AppContext';
import { Counter } from './components/Counter';
import { UserForm } from './components/UserForm';
import { Editor } from './components/Editor';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Professional React Application
          </h1>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Interactive Counter</h2>
            <Counter />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <UserForm />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Rich Text Editor</h2>
            <Editor />
          </section>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;