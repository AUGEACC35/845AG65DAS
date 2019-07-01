import axios from 'axios';

export default class LrService {
  getLr = async () => {
    return await axios.get('/api/lr');
  }
}
