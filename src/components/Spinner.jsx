const Spinner = () => {
    return (
      <div className="flex items-center justify-center bg-black z-50 min-h-screen fixed inset-0 bg-opacity-70">
        <div className="flex justify-center items-center h-screen">
          <span class="loader"></span>
        </div>
      </div>
    );
  };
  
  export default Spinner;
  