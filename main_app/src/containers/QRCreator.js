import { useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import '../styles/home.css';

  
function QRCreator(props) {
    let id = useParams()
    console.log(id.id)
    return (
        <div className="home">
            <br /><br /><br />
        <center>
            {id && (
            <QRCode
                title="GeeksForGeeks"
                value={id.id}
                bgColor={'white'}
                fgColor={'black'}
                size={400}
            />
            )}
        </center>
        </div>
    );
}
  
export default QRCreator;