

function ConverterToggler({ open, toggle }) {
  
  const cssClassName = open
    ? 'ConverterToggler ConverterToggler--open'
    : 'ConverterToggler';

    

  return (
    <div className="bg-white"> 
    <button
    className={`relative items-center z-10 w-12 h-12 mx-auto block rounded-full border-4 border-slate-500 bg-white font-bold text-2xl transition-transform transition-background-color duration-200 ${
      open ? 'rotate-90' : ''
    }`}
      type="button"
      onClick={() => {
        toggle();
      }}
    >
      =
    </button>
    </div>
  );
}

export default ConverterToggler;