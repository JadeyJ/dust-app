
import './App.css';
import axios from "axios";

function App() {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth';
    var queryParams = `?serviceKey=${API_KEY}` +
        '&returnType=json' +
        '&numOfRows=10' +
        '&pageNo=1' +
        '&stationName=서울역' +
        '&dataTerm=MONTH' +
        '&ver=1.3';

    axios.get(base_url+queryParams).then((res) => {
        const data = res.data.list[0];
        console.log(data);
    });



  return (
    <div className="App">
        
    </div>
  );
}

export default App;
