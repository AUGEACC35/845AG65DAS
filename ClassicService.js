import axios from 'axios';

export default class ClassicService {
  getClassic = async () => {
    return await axios.get('/api/classic');
  }
}
