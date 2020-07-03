import React,{useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import './ListInput.css';

import ResultShow from '../ResultShow/ResultShow';

const ListInput = ()=>{

    const [stateIp,setStateIp] = useState("");
    const [stateVerificar,setStateVerificar] = useState("");

    const handleVerificarShow = ()=>{
        setStateVerificar(1)
    }
    const handleVerificarClear = ()=>{
        setStateVerificar(0)
    }

    return(
        <div className="content">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="form-label">IP</Form.Label>
                    <Form.Control type="text" placeholder="1.2.3.4" onChange={e => setStateIp(e.target.value)}/>
                </Form.Group>
                {!stateVerificar && <Button variant="primary" onClick={handleVerificarShow}>Verificar</Button>}
                {stateVerificar && <Button variant="primary" onClick={handleVerificarClear}>Verificar Novamente</Button>}

            </Form>
            {stateVerificar ? <ResultShow props={stateIp}/> : ""}
        </div>
        )
}

export default ListInput;