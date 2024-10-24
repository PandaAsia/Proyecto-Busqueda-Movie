import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <h1>Buscador de Peliculas</h1>
        <header>
          <form action="">
            <input
              type="text"
              placeholder="avengers, start wras, the matrix..."
            />
            <button type="submit">Buscar</button>
          </form>
        </header>
        <main>
          <div>Aqui Iran los resultado</div>
        </main>
      </div>
    </>
  );
}

export default App;
