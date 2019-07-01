import axios from 'axios';

export default class LtvTwoService {
  getLtvTwo = async () => {
    return await axios.get('/api/Ltv2');
  }
}
