import axios from 'axios';

export default class OpusService {
  getOpus = async () => {
    return await axios.get('/api/opus');
  }
}
