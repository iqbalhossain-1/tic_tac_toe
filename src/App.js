import TicTacToe from "./component/TicTacToe";

function App() {

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-300">
      <h1 className="text-3xl font-bold">tic tac toe</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
