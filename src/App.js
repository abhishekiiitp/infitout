import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header'
function App() {
  return (
    <>
       <Navbar/>
       <Header/>
       <div className={styles.btn_cont}>
          <div style={{marginLeft:"auto",marginRight:"11%",marginTop:"2%"}}>
          <button className={styles.ltp} style={{marginRight: "10px"}}>LTP</button>
          <button className={styles.greeks}>Greeks</button>
          </div>
       </div>
    </>
  );
}

export default App;
