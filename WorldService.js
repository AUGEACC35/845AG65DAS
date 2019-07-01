import axios from 'axios';

export default class WorldService {
  getWorld = async () => {
    return await axios.get('/api/world');
  }
}
