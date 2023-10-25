import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
   const [number, setNumber] = useState("");
   const [Provider, setProvider] = useState("");
   const [Fee, setFee] = useState("");
   // const [Expiration, setExpiration] = useState("");
   
   const [Ids, setIds] = useState("");
   const [numbers, setNumbers] = useState("");
   const [Providers, setProviders] = useState("");
   const [Fees, setFees] = useState("");
   

   const [gId, setGIds] = useState("");
   const [Details, setDetails] = useState("");
   const [Wallet, setWallet] = useState("");

 
   // const handlePolicyNumber = (e) => {
   //    setNumber(e.target.value)
   // } 

   const handleNumber = (e) => {
      setNumber(e.target.value)
   } 

   const handleProvider = (e) => {
      setProvider(e.target.value)
   } 

   const handleFee = (e) => {
      setFee(e.target.value)
   } 

   


   

   const handleAddToll = async () => {
      try {
         let tx = await contract.addTollFreeNumber(number, Provider, Fee.toString())
         let wait = await tx.wait()
         alert(wait.transactionHash)
         console.log(wait);
      } catch (error) {
         alert(error)
      }
   }


   const handleNumbersIds = (e) => {
      setIds(e.target.value)
   }

   const handleNumbers = (e) => {
      setNumbers(e.target.value)
   }

   const handleProviders = (e) => {
      setProviders(e.target.value)
   }

   const handleFees = (e) => {
      setFees(e.target.value)
   } 
  

   const handleUpdate = async () => {
      try {
         let tx = await contract.updateTollFreeNumber(Ids.toString(), numbers, Providers, Fees.toString())
         let wait = await tx.wait()
         console.log(wait);
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)   
      }
   }

   
   const handleGetIds = async (e) => {
      setGIds(e.target.value)
   }

   const handleGetDetails = async () => {
      try {
         let tx = await contract.getTollFreeNumberDetails(gId.toString())
         
         let arr = []
         tx.map(e => {
            arr.push(e)
         })
         
         console.log(tx);
         setDetails(arr)
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Toll Free Number</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>
     <Col style={{marginRight:"100px"}}>
      <div>
         {/* <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePolicyNumber} type="string" placeholder="Policy number" value={number} /> <br /> */}
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNumber} type="number" placeholder="Phone Number" value={number} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleProvider} type="string" placeholder="Service Provider" value={Provider} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleFee} type="number" placeholder="Monthly fee" value={Fee} /> <br />

       <Button onClick={handleAddToll} style={{ marginTop: "10px" }} variant="primary"> Add Toll Free Number</Button>
      </div>
     </Col>

             <Col style={{ marginRight: "100px" }}>
                <div>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNumbersIds} type="number" placeholder="Policy number" value={Ids} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNumbers} type="number" placeholder="Phone Number" value={numbers} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleProviders} type="string" placeholder="Service Provider" value={Providers} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleFees} type="number" placeholder="Monthly fee" value={Fees} /> <br />
  

                   <Button onClick={handleUpdate} style={{ marginTop: "10px" }} variant="primary"> Update Toll Free Number</Button>
                </div>
             </Col>
               
   </Row>    
   <Row>
             <Col >
                <div style={{ margin: "auto" , marginTop:"100px"}}>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleGetIds} type="number" placeholder="Enter Toll Number Id" value={gId} /><br />

                   <Button onClick={handleGetDetails} style={{ marginTop: "10px" }} variant="primary">Get Product Details</Button>
                   {Details ? Details?.map(e => {
                      return <p>{e.toString()}</p>
                   }) : <p></p>}
                </div>
             </Col> 
   </Row>
   </Container>

  </div>
 )
}

export default Home;
