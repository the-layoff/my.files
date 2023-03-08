import React from 'react';
import ModuleHeader from '../../components/Headers/moduleHeader';

const myDivide = (a: number, b: number): number => {
  const result = a / b;
  if (b === 0) throw new EvalError('You cannot divide by zero dumb ass!');
  return result;
};

async function methodDoesFuckingExist(a: number, b: number) {
    const result = Math.floor(myDivide(a, b));
    console.log(result);
}

const Gamers = () => {
  return (
    <div className="mf-bg-white mf-p-8 mf-text-black mf-shadow-xl mf-ring-1">
      <ModuleHeader primary={true} headerContent="Gamer" headerTag="h1" />
      <button onClick={() => methodDoesFuckingExist(0, 2)}>Break the world</button>
    </div>
  );
};

export default Gamers;
