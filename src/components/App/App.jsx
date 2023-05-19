import Converter from '../Converter/Converter';
import Particle from '../Particle/Particle';

const App = () => {
  return (
    <div className="w-[400px] mx-auto  min-h-screen flex flex-col justify-center items-center">
      <Particle />
      <Converter />
    </div>
  )
}
export default App
