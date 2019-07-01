import axios from 'axios';

export default class LtvOneService {
  getLtvOne = async () => {
    return await axios.get('/api/Ltv1');
  }
}
