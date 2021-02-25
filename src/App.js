import "./index.css";
import React, { useEffect, useState } from 'react';
import {fetchMlbData} from './api';
import BoxScore from "./BoxScore";
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMlbData().then(data => {
      setData(data);
      console.log('data ', data);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="App" style={{ padding: '100px'}}>
      {isLoading ? (
        <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
        </div>
      ) : <BoxScore data={data}/>}
    </div>
  );
}

export default App;
