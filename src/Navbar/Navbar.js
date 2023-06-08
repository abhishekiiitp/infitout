import React from 'react'
import styles from './Navbar.module.css';
import logo from '../TT.PNG'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <img className={styles.logo} alt='logo' src={logo}/>
        <span className={styles.nav_item_dashboard}>Dashboard</span>
        <span className={styles.nav_item} style={{color:"blue",fontWeight:"700px"}}>Option chain</span>
        <span className={styles.nav_item}>Strategy builder</span>
        <span className={styles.nav_item}>Positions</span>
        <span className={styles.nav_item}>Order book</span>
        <div className={styles.nav_3item_container_nifty}>
            <span className={styles.nif_text}>NIFTY</span>
            <div style={{display:"flex"}}>
                <span style={{fontSize:"10px",marginTop:"auto",color:"#008000"}}>0.35%</span>&nbsp;
                <span>18,245.32</span>
            </div>
        </div>

        <div className={styles.nav_3item_container}>
            <span className={styles.nif_text}>BANKNIFTY</span>
            <div style={{display:"flex"}}>
                <span style={{fontSize:"10px",marginTop:"auto",color:"#008000"}}>0.7%</span>&nbsp;
                <span> 39,156.1</span>
            </div>
        </div>

        <div className={styles.nav_3item_container}>
            <span className={styles.nif_text}>INDIA VIX</span>
            <div style={{display:"flex"}}>
                <span style={{fontSize:"10px",marginTop:"auto",color:"#8B0000"}}>-10.9%</span>&nbsp;
                <span>12.12</span>
            </div>
        </div>

        <span className={styles.nav_item_profile}>Profile</span>
        <ArrowDropDownIcon className={styles.nav_item_profile_drop}/>
    </div>
  )
}

export default Navbar