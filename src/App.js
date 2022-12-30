import './App.css';
import NftUploader from './components/NftUploader/NftUploader';

function App() {

  return (
    <div className='App'>
      <NftUploader></NftUploader>
      <div>
        <a href='https://opensea.io/ja/account?tab=collected'><button className='profileButton' >My Opensea</button></a>
      </div>
    </div>
  );
}


export default App;