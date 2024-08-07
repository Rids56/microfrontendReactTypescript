import React, { lazy, ReactElement, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary';

const MicroFrontend1 = lazy(() => import('microfrontend1/todo'))

// const MicroFrontend1 = lazy(() => {
//   console.log('Attempting to import microfrontend1/app');
//   const module = import('microfrontend1/app');
//   console.log('Imported microfrontend1/app:', module);
//   return module;
// });

export const MFE1: React.FC = (): ReactElement => {
  return (
    <>
      <div className='container'>
        <div>
          <div>Welcome to ToDo Page</div>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <MicroFrontend1 />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}