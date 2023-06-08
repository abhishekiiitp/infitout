import React from 'react'
import styles from './Header.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TuneIcon from '@mui/icons-material/Tune';
const Header = () => {
  const [support,setSupport]=React.useState(18100);
  const [resistance,setResistance]=React.useState(18500);
  const supportup=()=>{
    var value=support+1;
    setSupport(value)
  }

  const supportdown=()=>{
    
    var value=support-1;
    setSupport(value)
  }

  const resistanceup=()=>{
    var value=resistance+1;
    setResistance(value);
  }

  const resistancedown=()=>{
    var value=resistance-1;
    setResistance(value)
  }

  return (
    <div className={styles.header_container}>
      <button className={styles.borderlabelbutton}>
        <span className={styles.label}>Scrip</span>
        NIFTY
      </button>
      <button className={styles.borderlabelbuttonexp}>
        <span className={styles.label}>Exp</span>
        18 May 2023
      </button>

      <div className={styles.text_spot}>
        <span style={{fontSize:"10px",color:"#808080"}}>Spot</span>
        <div style={{display:"flex"}}>
            <span>18,245.32</span>&nbsp;
            <span style={{fontSize:"10px",marginTop:"auto",color:"#008000"}}>0.35%</span>    
        </div>
      </div>

      <div className={styles.text_fut}>
        <span style={{fontSize:"10px",color:"#808080"}}>Fut</span>
        <div style={{display:"flex"}}>
            <span>18,251.1</span>&nbsp;
            <span style={{fontSize:"10px",marginTop:"auto",color:"#008000"}}>0.35%</span>    
        </div>
      </div>

      <div style={{marginLeft:"5%"}} className={styles.text_fut}>
        <span style={{fontSize:"10px",color:"#808080"}}>Max pain</span>
        <div style={{display:"flex"}}>
            <span>18,200</span>    
        </div>
      </div>
      <div  className={styles.text_fut}>
        <span style={{fontSize:"10px",color:"#808080"}}>PCR</span>
        <div style={{display:"flex"}}>
            <span>0.92</span>    
        </div>
      </div>
      <div  className={styles.text_fut}>
        <div style={{display:"flex"}} >
        <span style={{fontSize:"10px",color:"#808080"}}>Support 1</span>
        <div style={{display:"flex",flexDirection:"column",height:"8px"}}>
          <KeyboardArrowUpIcon onClick={supportup} style={{height:"10px"}}/>
          <KeyboardArrowDownIcon onClick={supportdown} style={{height:"10px"}}/>
        </div>
          
        </div>
        
        <div style={{display:"flex"}}>
            <span>{support}</span>    
        </div>
      </div>
      <div  className={styles.text_fut}>
        <div style={{display:"flex"}} >
        <span style={{fontSize:"10px",color:"#808080"}}>Resistance 1</span>
        <div style={{display:"flex",flexDirection:"column",height:"8px"}}>
          <KeyboardArrowUpIcon onClick={resistanceup} style={{height:"10px"}}/>
          <KeyboardArrowDownIcon onClick={resistancedown} style={{height:"10px"}}/>
        </div>
          
        </div>
        
        <div style={{display:"flex"}}>
            <span>{resistance}</span>    
        </div>
        
      </div>

      <div style={{marginLeft:"6%",marginTop:"1.5%"}}>
        <TuneIcon/>
      </div>
      <span style={{marginTop:"1.5%"}}>Filters</span>

      <div style={{marginLeft:"5%",marginTop:"1%"}}>
        <button className={styles.basket_btn}>Basket</button>
        <span className={styles.basket_count}>3</span>
      </div>
    </div>
  );
}

export default Header